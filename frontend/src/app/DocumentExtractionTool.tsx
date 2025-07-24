'use client';
import FileDropZone from "@/ui/FileDropZone";
import { useState } from "react";

export default function DocumentExtractionTool() {
  const [isDropZoneVisible, setDropZoneVisibility] = useState(true);

  return (
    <div className="mx-auto max-w-4xl py-25 sm:py-20 lg:py-15">
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-balance text-gray-900">Document Extraction Tool</h1>
        { isDropZoneVisible ? <p className="mt-8 text-base font-medium text-pretty text-gray-500">Upload any PDF to extract relevant data and patterns. Query specific information from your document with ease.</p> : null }
      </div>
      <FileDropZone showDropZone={isDropZoneVisible} setDropZoneVisibility={setDropZoneVisibility}></FileDropZone>
    </div>
  );
}
