import React, { JSX } from 'react';

type PrintReportButtonProps = {
  component: JSX.Element;
  label?: string;
};

const PrintReportButton: React.FC<PrintReportButtonProps> = ({ component, label = 'Print' }) => {
  const handlePrint = async () => {
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    if (!printWindow) {
      alert('Unable to open print window');
      return;
    }
    const stylePaths = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
      .map((link) => (link as HTMLLinkElement).href);

    const html = `
      <html>
        <head>
          <title>Print Preview</title>
          ${stylePaths.map(path => `<link href="${path}" rel="stylesheet">`).join(' ')}
          <style>
            body { font-family: sans-serif; padding: 2rem; }
            @media print {
              body { margin: 0; }
            }
          </style>
        </head>
        <body>
          <div id="print-root"></div>
        </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();

    // Wait for the DOM to be ready
    printWindow.onload = () => {
      // Mount React component into the print window using React 18's render method
      import('react-dom/client').then(({ createRoot }) => {
        const root = createRoot(printWindow.document.getElementById('print-root')!);
        root.render(component);

        // Give some time for rendering, then print
        setTimeout(() => {
          printWindow.focus();
          printWindow.print();
          // Optional: close the window after printing
          printWindow.close();
        }, 500);
      });
    };
  };

  return (
    <button
      onClick={handlePrint}
      className="bg-indigo-400 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mx-3" >
      {label}
    </button>
  );
};

export default PrintReportButton;
