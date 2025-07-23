'use client';
import React, {useCallback, useState} from 'react'
import {FileRejection, useDropzone} from 'react-dropzone'

export default function FileDropZone() {
  const [errorMessage, setErrorMessage] = useState('');

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
    const errors = fileRejections.reduce((list: string[], rejection) => {
      rejection.errors.forEach(error => {
        if (!list.includes(error.message)) {
          list.push(error.message);
        }
      });
      return list;
    }, []);
    setErrorMessage(errors.join(';'));
    const acceptedFile = acceptedFiles[0];
    console.log(acceptedFile);
  }, [setErrorMessage]);

  const {getRootProps, getInputProps} = useDropzone({
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1,
    onDrop,
    onFileDialogOpen: () => setErrorMessage('')
  });

  return (
    <div className="mt-15 text-center">
      <p className="text-red-500 mb-3">{errorMessage}</p>
      <div {...getRootProps()} className="h-100 flex items-center justify-center border-dashed border-3 border-gray-500 rounded-2xl">
        <input {...getInputProps()} />
        <p>Drag and drop or select a file to begin</p>
      </div>
    </div>
  )
}