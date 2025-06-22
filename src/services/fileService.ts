import axios from 'axios';
import { File as FileType, PaginatedFileResponse } from '../types/file';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

export const fileService = {
  async uploadFile(file: File): Promise<FileType> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${API_URL}/files/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // getFiles: async (search: string, page: number) => {
  //   const params = new URLSearchParams();
  //   if (search) params.append('search', search);
  //   params.append('page', page.toString());
  //   const response = await fetch(`/api/files/?${params.toString()}`);
  //   console.log(response.json());
  //   return await response.json(); // must return { results: [...], count: N }
  // },

  // Fetch files with search and pagination
  getFiles: async (search: string, page: number): Promise<PaginatedFileResponse> => {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    params.append('page', page.toString());

    const res = await fetch(`${API_URL}/files/?${params.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch files');
    const data = await res.json();   // ✅ parse it here
    console.log('✅ Parsed file data:', data);  // ✅ this shows the real shape
    return data; // returns full { count, results, next, previous }
  },

  async deleteFile(id: string): Promise<void> {
    await axios.delete(`${API_URL}/files/${id}/`);
  },

  async downloadFile(fileUrl: string, filename: string): Promise<void> {
    try {
      const response = await axios.get(fileUrl, {
        responseType: 'blob',
      });
      
      // Create a blob URL and trigger download
      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      throw new Error('Failed to download file');
    }
  },
}; 