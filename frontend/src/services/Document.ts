import axios from 'axios';

const baseUri = '/document';

const DocumentService = {
  submit: async (file: File) => {
    const formData = new FormData();
    formData.append('document', file);
    const result = await axios.post(process.env.NEXT_PUBLIC_API_URL + baseUri + '/extract', formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    });

    return result?.data;
  }
};

export default DocumentService;