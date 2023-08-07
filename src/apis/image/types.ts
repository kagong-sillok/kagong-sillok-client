import type { ImageObject, ImageObjectWithId } from '@/types/Image';

export interface ImageResponse {
  images: ImageObjectWithId[];
}

export interface UploadImagesPayload {
  files: File[];
  folderName: string;
}
