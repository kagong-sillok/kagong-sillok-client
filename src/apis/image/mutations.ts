import { uploadImages } from './apis';
import { useMutation } from '@tanstack/react-query';

export function useUploadImagesMutation() {
  return useMutation(uploadImages);
}
