import { postReview, deleteReview } from './apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function usePostReviewMutation(placeId: number) {
  const queryClient = useQueryClient();

  return useMutation(postReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews', placeId]);
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
