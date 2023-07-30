import api from '@/apis/config/instance';
import ky from 'ky';

import type { Place, PlacesAround } from '@/types/place';

export const getPlace = async (id: number) => {
  const { data } = await api.get(`api/v1/places/${id}`).json<APIResponse<Place>>();
  // const { data } = await ky.get('/db/place.json').json<APIResponse<Place>>();

  return data;
};

export const getPlacesAround = async (params: PlacesAround) => {
  const { data } = await api
    .get('api/v1/places/around', {
      searchParams: { ...params },
    })
    .json<APIResponse<{ places: Place[] }>>();
  // const { data } = await ky.get('/db/places.json').json<APIResponse<{ places: Place[] }>>();

  return data;
};
