import { getImages } from '@/apis/place';
import { useQuery } from '@tanstack/react-query';

export function useGetImages(imageIds: number[]) {
  return useQuery(['images', { imageIds }], () => getImages(imageIds), {
    enabled: !!imageIds.length,
  });
}
