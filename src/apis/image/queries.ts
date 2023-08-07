import { getImages } from './apis';
import { Keys } from './keys';
import { useSuspenseQuery } from '@suspensive/react-query';

export function useGetImages(imageIds: number[]) {
  return useSuspenseQuery(Keys.images(imageIds), () => getImages(imageIds), {
    enabled: !!imageIds?.length,
  });
}
