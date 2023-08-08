import { uploadImages } from './apis';
import { useMutation } from '@tanstack/react-query';

export function useImagesUpload() {
  return useMutation(uploadImages);
}
