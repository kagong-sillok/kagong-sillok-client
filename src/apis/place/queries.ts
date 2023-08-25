import { getPlace, getPlaceByTagId, getPlaceConditions, getPlacesAround } from './apis';
import { Keys } from './keys';
import { useSuspenseQuery } from '@suspensive/react-query';

import type { Coordinates } from '@/types/place';

export function useGetPlace(id: number) {
  return useSuspenseQuery(Keys.place(id), () => getPlace(id));
}

export function useGetPlaceWithTags(id: number) {
  return useSuspenseQuery(Keys.placeWithTags(id), () => getPlace(id));
}

export function useGetPlacesAround(around: Coordinates) {
  return useSuspenseQuery(Keys.placesAround(), () => getPlacesAround(around));
}

export function useGetPlaceConditions() {
  return useSuspenseQuery(Keys.placeConditions(), () => getPlaceConditions());
}

export function useGetPlaceByTagId(tagIds: number[]) {
  return useSuspenseQuery(Keys.placeByTagId(tagIds), () => getPlaceByTagId(tagIds), {
    enabled: tagIds.length > 0,
  });
}
