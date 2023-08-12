import type { PlacesAround } from '@/types/place';

export const Keys = Object.freeze({
  place: (id: number) => ['place', id],
  placesAround: () => ['placesAround'],
  placeConditions: () => ['placeConditions'],
});
