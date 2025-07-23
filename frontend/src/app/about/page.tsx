export default function About() {
  return (
    <div className="mx-auto max-w-4xl py-50 sm:py-45 lg:py-40 flex flex-col md:flex-row">
      <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900">Document Extraction Tool</h1>
      <div className="text-right">
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500">This is a demo project for extracting data from a pdf file developed using Node.js, React.js, Tailwind CSS, Pdf-parse and Open-ai.</p>
      </div>
    </div>
  );
}
