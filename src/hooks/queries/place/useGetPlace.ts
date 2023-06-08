import { getPlace } from '@/apis/place';
import { useQuery } from '@tanstack/react-query';

export function useGetPlace(id: string) {
  return useQuery(['place', id], () => getPlace(id), {
    enabled: !!id,
  });
}
