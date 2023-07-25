import type { PlacesAroundType } from '@/types/place';

export const Keys = Object.freeze({
  place: (id: number) => ['place', id],
  placesAround: (around: PlacesAroundType) => ['placesAround', around],
  reviews: (placeId: number) => ['reviews', placeId],
  images: (imageIds: number[]) => ['images', { ...imageIds }],
});
