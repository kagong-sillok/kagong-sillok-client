import { postReview } from './apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function usePostReviewMutation(placeId: number) {
  const queryClient = useQueryClient();

  return useMutation(postReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews', placeId]);
    },
  });
}
