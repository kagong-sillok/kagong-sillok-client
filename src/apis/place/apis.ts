import api from '@/apis/config/instance';

import type { Place, PlacesAround } from '@/types/place';

export const getPlace = async (id: number) => {
  console.log(`api/v1/places/${id}`);
  const { data } = await api.get<Place>(`api/v1/places/${id}`);

  return data;
};

export const getPlacesAround = async (params: PlacesAround) => {
  const { data } = await api.get<{ places: Place[] }>('api/v1/places/around', {
    searchParams: { ...params },
  });

  return data;
};
