import { getMemberReviews, getPlaceReviews, getReviewImages, deleteReview } from './apis';
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
  return useSuspenseQuery(Keys.memberReviews(memberId), () => getMemberReviews(memberId), {
    enabled: memberId > 0,
    refetchOnMount: 'always',
  });
}

export function useDeletePlaceReview(reviewId: number) {
  return useSuspenseQuery(Keys.deleteReview(reviewId), () => deleteReview(reviewId));
}

export function useGetReviewImages(placeId: number) {
  return useSuspenseQuery(Keys.reviewImages(placeId), () => getReviewImages(placeId));
}
