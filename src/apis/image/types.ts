import type { Image } from '@/types/Image';

export interface ImagesPayload {
  images: Omit<Image, 'id'>[];
}
