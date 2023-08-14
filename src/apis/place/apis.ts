import api from '@/apis/config/instance';

import type { Place, PlaceCondition, Coordinates } from '@/types/place';

export const getPlace = async (id: number) => {
  const { data } = await api.get<Place>(`api/v1/places/${id}`);

  return data;
};

export const getPlacesAround = async (params: Coordinates) => {
  const { data } = await api.get<{ places: Place[] }>('api/v1/places/around', {
    searchParams: { ...params },
    cache: 'no-store',
  });

  return data;
};

export const getPlaceConditions = async () => {
  const { data } = await api.get<{ tags: PlaceCondition[] }>('api/v1/tags/all');

  return data;
};
