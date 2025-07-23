import FileDropZone from "@/ui/FileDropZone";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl py-25 sm:py-20 lg:py-15">
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-balance text-gray-900">Document Extraction Tool</h1>
        <p className="mt-8 text-base font-medium text-pretty text-gray-500">Upload any PDF to extract relevant data and patterns. Query specific information from your document with ease.</p>
      </div>
      <FileDropZone></FileDropZone>
    </div>
  );
}
