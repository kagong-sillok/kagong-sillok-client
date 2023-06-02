import { getPlace } from '@/apis/place';
import { useQuery } from '@tanstack/react-query';

export function useGetPlaceById(id: string) {
  return useQuery(['place'], () => getPlace(id));
}
