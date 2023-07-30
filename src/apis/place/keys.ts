import type { PlacesAround } from './types';

export const Keys = Object.freeze({
  place: (id: number) => ['place', id],
  placesAround: (around: PlacesAround) => ['placesAround', around],
});
