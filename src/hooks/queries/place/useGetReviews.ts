import { getReviews } from '@/apis/place';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useGetReviews(placeId: string, size = 5) {
  return useInfiniteQuery(
    ['reviews', placeId],
    ({ pageParam = 0 }) => getReviews(placeId, size, pageParam),
    {
      enabled: !!placeId,
      getNextPageParam: (lastPage) => lastPage.pageParam + size,
    }
  );
}
