import type { PlacesAround } from '@/types/place';

export const Keys = Object.freeze({
  place: (id: number) => ['place', id],
  placesAround: (around: PlacesAround) => ['placesAround', around],
  placeConditions: ['placeConditions'],
});
