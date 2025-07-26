'use client';
import DocumentService from '@/services/Document';
import React, {useCallback, useState} from 'react';
import {FileRejection, useDropzone} from 'react-dropzone';
import ReportResult from './ReportResult';
import Spinner from './Spinner';
import { AxiosError } from 'axios';
import PrintableReportResult from './PrintableReportResult';
import PrintReportButton from './PrintReportButton';

export type OnSuccessfulDropCallback = (file: File) => void;

type FileDropZoneProps = {
  showDropZone: boolean
  setDropZoneVisibility: (visibility: boolean) => void
}

export default function FileDropZone({ showDropZone, setDropZoneVisibility } : FileDropZoneProps) {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [extractedReport, setExtractedReport] = useState();

  const reset = () => {
    setExtractedReport(undefined);
    setDropZoneVisibility(true);
    setErrorMessage('');
  }

  const uploadDocument = useCallback(async (document: File) => {
    try {
      setLoading(true);
      setDropZoneVisibility(false);
      const result = await DocumentService.submit(document);
      setExtractedReport(result);
    } catch (err) {
      const error = err as AxiosError;
      const { message } = (error?.response?.data || error) as Error;
      setErrorMessage(message || 'Server error');
      setDropZoneVisibility(true);
    }
    setLoading(false);
  }, [setDropZoneVisibility]);

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
    const errors = fileRejections.reduce((list: string[], rejection) => {
      rejection.errors.forEach(error => {
        if (!list.includes(error.message)) {
          list.push(error.message);
        }
      });
      return list;
    }, []);

    uploadDocument(acceptedFiles[0]);
    setErrorMessage(errors.join(';'));
  }, [setErrorMessage, uploadDocument]);

  const {getRootProps, getInputProps} = useDropzone({
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1,
    onDrop,
    onFileDialogOpen: () => setErrorMessage('')
  });

  return (
    <div className="mt-15 text-center">
      { loading ? <Spinner /> :
        <div>
          <p className="text-red-500 mb-3">{errorMessage}</p>
          { showDropZone ? (
              <div {...getRootProps()} className="h-100 flex items-center justify-center border-dashed border-3 border-gray-500 rounded-2xl">
                <input {...getInputProps()} />
                <p>Drag and drop or select a file to begin</p>
              </div>
            ) : (
              <div>
                { extractedReport ? <ReportResult result={extractedReport} /> : null }
                { extractedReport ? <PrintReportButton label='Print Result' component={<PrintableReportResult result={extractedReport}/>} /> : null }
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={reset}>
                  Start over
                </button>
              </div>
            )
          }
        </div>
      }
    </div>
  )
}