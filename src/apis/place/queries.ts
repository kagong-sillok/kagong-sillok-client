import { Keys, getImages, getPlace, getPlacesAround, getReviews } from '.';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import type { PlacesAroundType } from '@/types/place';

export function useGetPlace(id: string) {
  return useQuery(Keys.place(id), () => getPlace(id), {
    enabled: !!id,
  });
}

export function useGetPlacesAround(around: PlacesAroundType) {
  return useQuery(Keys.placesAround(around), () => getPlacesAround(around));
}

export function useGetReviews(placeId: string, size = 5) {
  return useInfiniteQuery(
    Keys.reviews(placeId),
    ({ pageParam = 0 }) => getReviews(placeId, size, pageParam),
    {
      enabled: !!placeId,
      getNextPageParam: (lastPage) => lastPage.pageParam + size,
    }
  );
}

export function useGetImages(imageIds: number[]) {
  return useQuery(Keys.images(imageIds), () => getImages(imageIds), {
    enabled: !!imageIds.length,
  });
}
