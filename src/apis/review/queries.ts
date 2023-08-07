import { getMemberReviews, getReviews } from './apis';
import { Keys } from './keys';
import { useSuspenseQuery } from '@suspensive/react-query';

/**
 * 페이지네이션 예정
 */
export function useGetReviews(placeId: number) {
  return useSuspenseQuery(Keys.reviews(placeId), () => getReviews(placeId));
}

/**
 * 페이지네이션 예정
 */
export function useGetMemberReviews(memberId: number) {
  return useSuspenseQuery(Keys.memberReviews(memberId), () => getMemberReviews(memberId));
}
