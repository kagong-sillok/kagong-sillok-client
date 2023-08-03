import type { ImageObject } from '@/types/Image';

export interface ImagesPayload {
  images: Omit<ImageObject, 'id'>[];
}
