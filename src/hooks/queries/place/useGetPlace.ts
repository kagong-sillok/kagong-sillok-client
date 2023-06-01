import { getPlace } from '@/apis/place';
import { useQuery } from '@tanstack/react-query';

import type { PlaceType } from '@/types/place';

export function useGetPlace() {
  return useQuery<PlaceType>(['place'], getPlace);
}
