import { getMemberReviews, getPlaceReviews } from './apis';
import { Keys } from './keys';
import { useSuspenseQuery } from '@suspensive/react-query';

/**
 * 페이지네이션 예정
 */
export function useGetPlaceReviews(placeId: number) {
  return useSuspenseQuery(Keys.reviews(placeId), () => getPlaceReviews(placeId));
}

/**
 * 페이지네이션 예정
 */
export function useGetMemberReviews(memberId: number) {
  return useSuspenseQuery(Keys.memberReviews(memberId), () => getMemberReviews(memberId));
}
