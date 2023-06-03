import { getReviews } from '@/apis/place';
import { useQuery } from '@tanstack/react-query';

export function useGetReviews(placeId: string) {
  return useQuery(['reviews', placeId], () => getReviews(placeId));
}
