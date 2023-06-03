import { getPlace } from '@/apis/place';
import { useQuery } from '@tanstack/react-query';

export function useGetPlace() {
  return useQuery(['place'], getPlace);
}
