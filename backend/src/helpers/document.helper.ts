import fs from 'fs';
import pdf from 'pdf-parse';

export const extract = async (document: Express.Multer.File): Promise<string> => {
  const extractedText = await pdf(fs.readFileSync(document.path));
  return extractedText?.text;
};