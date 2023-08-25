import type { Coordinates } from '@/types/place';

export const Keys = Object.freeze({
  place: (id: number) => ['place', id],
  placeWithTags: (id: number) => ['placeWithTags', id],
  placesAround: (coordinates: Coordinates) => ['placesAround', coordinates],
  placeConditions: () => ['placeConditions'],
  placeByTagId: (tagIds: number[]) => ['placeByTagId', tagIds.join(',')],
});
