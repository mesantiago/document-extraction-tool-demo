import axios from 'axios';
import settings from '../config/settings';
import ExtractReportResult from '@/interfaces/ExtractReportResult';

const baseUri = '/document';

const DocumentService = {
  submit: async (file: File) => {
    const formData = new FormData();
    formData.append('document', file);
    const result = await axios.post(settings.baseUrl + baseUri + '/extract', formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    });

    return result?.data;
  }
};

export default DocumentService;