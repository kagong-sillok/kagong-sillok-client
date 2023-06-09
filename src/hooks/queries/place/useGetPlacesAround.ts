import { getPlacesAround } from '@/apis/place';
import { useQuery } from '@tanstack/react-query';

import type { PlacesAroundType } from '@/types/place';

export function useGetPlacesAround(around: PlacesAroundType) {
  return useQuery(['placesAround', around], () => getPlacesAround(around));
}
