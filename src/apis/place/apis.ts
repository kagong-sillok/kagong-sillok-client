/* eslint-disable @typescript-eslint/no-unused-vars */

import api from '../api';
import ky from 'ky';

import type { ImageType, PlaceType, PlacesAroundType, ReviewType } from '@/types/place';

export const getPlace = async (id: string) => {
  // const data = await api.get(`api/v1/places/${id}`);
  const data = await ky.get('/db/place.json');
  const json = await data.json<{ data: PlaceType }>();

  return json.data;
};

export const getPlacesAround = async (params: PlacesAroundType) => {
  const data = await ky.get('/db/places.json');
  const json = await data.json<{ data: { places: PlaceType[] } }>();

  return json.data;
};

export const getReviews = async (placeId: string, size: number, pageParam: number) => {
  const data = await ky.get('/db/reviews.json');
  const json = await data.json<{ data: { reviews: ReviewType[] } }>();

  return {
    data: json.data,
    pageParam,
  };
};

export const getImages = async (imageIds: number[]) => {
  const data = await api.get('api/v1/images', {
    searchParams: {
      imageIds: imageIds.join(','),
    },
  });
  // const data = await ky.get('/db/images.json');
  const json = await data.json<{ data: { images: ImageType[] } }>();

  return json.data;
};
