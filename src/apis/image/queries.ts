import { getImages } from './apis';
import { Keys } from './keys';
import { useQuery } from '@tanstack/react-query';

export function useGetImages(imageIds: number[]) {
  return useQuery(Keys.images(imageIds), () => getImages(imageIds), {
    enabled: !!imageIds.length,
  });
}
