import type { PlacesAroundType } from '@/types/place';

export const Keys = Object.freeze({
  place: (id: string) => ['place', id],
  placesAround: (around: PlacesAroundType) => ['placesAround', around],
  reviews: (placeId: string) => ['reviews', placeId],
  images: (imageIds: number[]) => ['images', { ...imageIds }],
});
