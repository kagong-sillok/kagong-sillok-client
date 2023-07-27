import { getPlace, getPlacesAround } from './apis';
import { Keys } from './keys';
import { useQuery } from '@tanstack/react-query';

import type { PlacesAround } from './types';

export function useGetPlace(id: number) {
  return useQuery(Keys.place(id), () => getPlace(id));
}

export function useGetPlacesAround(around: PlacesAround) {
  return useQuery(Keys.placesAround(around), () => getPlacesAround(around));
}
