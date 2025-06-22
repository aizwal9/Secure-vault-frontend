export interface File {
  id: string;
  original_filename: string;
  file_type: string;
  size: number;
  uploaded_at: string;
  file: string;
} 

export interface PaginatedFileResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: File[];
}