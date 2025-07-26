import fs from 'fs';
import pdf from 'pdf-parse';

const tryToRemoveHeadersAndFooters = (text: string): string => {
  // Split text into pages
  const pages = text.split(/\f/); // \f is form feed character used as page separator

  const headerLines: Record<string, number> = {};
  const footerLines: Record<string, number> = {};

  // Count occurrences of first and last lines
  for (const page of pages) {
    const lines = page.trim().split('\n');
    if (lines.length === 0) continue;

    const header = lines[0].trim();
    const footer = lines[lines.length - 1].trim();

    headerLines[header] = (headerLines[header] || 0) + 1;
    footerLines[footer] = (footerLines[footer] || 0) + 1;
  }

  // Find common header/footer (appears on most pages)
  const totalPages = pages.length;
  const headerThreshold = totalPages * 0.7;
  const footerThreshold = totalPages * 0.7;

  const commonHeaders = Object.entries(headerLines)
    .filter(([, count]) => count >= headerThreshold)
    .map(([line]) => line);

  const commonFooters = Object.entries(footerLines)
    .filter(([, count]) => count >= footerThreshold)
    .map(([line]) => line);

  // Remove common headers/footers
  const cleanedPages = pages.map((page) => {
    const lines = page.trim().split('\n');

    // Remove header if matched
    const firstLine = lines[0];
    if (firstLine && commonHeaders.includes(firstLine.trim())) {
      lines.shift();
    }

    // Remove footer if matched
    const lastLine = lines[lines.length - 1]
    if (lastLine && commonFooters.includes(lastLine.trim())) {
      lines.pop();
    }

    return lines.join('\n');
  });

  return cleanedPages.join('\n\n'); // Return final cleaned text
}

const customPageRender = (pageData: any) => pageData
  .getTextContent({ normalizeWhitespace: false, disableCombineTextItems: false })
  .then((textContent: any) => {
    let lastY: number | undefined;
    let text = '';

    for (const item of textContent.items) {
      const y = item.transform[5]; // vertical index
      const str = item.str;

      if (lastY === y || lastY === undefined) {
        text += str; // same line
      } else {
        text += '\n' + str; // new line
      }
      lastY = y;
    }

    return text + '\f'; // new page
  });

export const extract = async (document: Express.Multer.File): Promise<string> => {
  const extractedText = await pdf(fs.readFileSync(document.path), { pagerender: customPageRender });
  if (!extractedText?.text?.trim()) {
    throw new Error('The PDF appears to contain no extractable text. It may be scanned or of insufficient quality.')
  }

  return tryToRemoveHeadersAndFooters(extractedText?.text || '');
};
