import { getMemberReviews, getReviews } from './apis';
import { Keys } from './keys';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useGetReviews(placeId: number, size = 5) {
  return useInfiniteQuery(
    Keys.reviews(placeId),
    ({ pageParam = 0 }) => getReviews(placeId, size, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.pageParam + size,
    }
  );
}

export function useGetMemberReviews(memberId: number, size = 5) {
  return useInfiniteQuery(
    Keys.memberReviews(memberId),
    ({ pageParam = 0 }) => getMemberReviews(memberId, size, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.pageParam + size,
    }
  );
}
