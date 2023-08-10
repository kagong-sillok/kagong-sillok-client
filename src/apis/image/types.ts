import type { ImageObjectWithId } from '@/types/Image';

export interface ImagesResponse {
  images: ImageObjectWithId[];
}

export interface UploadImagesPayload {
  files: File[];
  folderName: string;
}
