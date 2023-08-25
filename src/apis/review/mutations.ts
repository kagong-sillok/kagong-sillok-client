import { postReview, deleteReview } from './apis';
import { Keys as ReviewKeys } from './keys';
import { Keys as PlaceKeys } from '../place';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function usePostReviewMutation(placeId: number) {
  const queryClient = useQueryClient();

  return useMutation(postReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(PlaceKeys.place(placeId));
      queryClient.invalidateQueries(ReviewKeys.reviews(placeId));
      queryClient.invalidateQueries(ReviewKeys.reviewImages(placeId));
    },
  });
}

export function useDeleteReviewMutation(memberId: number) {
  const queryClient = useQueryClient();

  return useMutation(deleteReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(['memberReviews', memberId]);
    },
  });
}
