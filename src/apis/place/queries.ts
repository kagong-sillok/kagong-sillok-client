import { getPlace, getPlaceConditions, getPlacesAround } from './apis';
import { Keys } from './keys';
import { useSuspenseQuery } from '@suspensive/react-query';
import { useQuery } from '@tanstack/react-query';

import type { PlacesAround } from '@/types/place';

export function useGetPlace(id: number) {
  return useSuspenseQuery(Keys.place(id), () => getPlace(id));
}

export function useGetPlacesAround(around: PlacesAround) {
  // TODO: useInfiniteQuery로 변경
  return useSuspenseQuery(Keys.placesAround(around), () => getPlacesAround(around));
}

export function useGetPlaceConditions() {
  return useSuspenseQuery(Keys.placeConditions, () => getPlaceConditions());
}
