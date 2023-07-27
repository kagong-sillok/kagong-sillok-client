/* eslint-disable @typescript-eslint/no-unused-vars */

import api from '@/apis/config/instance';
import ky from 'ky';

import type { ImageType, PlaceType, PlacesAroundType, ReviewType } from '@/types/place';

export const getPlace = async (id: number) => {
  // const {data} = await api.get(`api/v1/places/${id}`);
  const { data } = await ky.get('/db/place.json').json<{ data: PlaceType }>();

  return data;
};

export const getPlacesAround = async (params: PlacesAroundType) => {
  const { data } = await ky.get('/db/places.json').json<{ data: { places: PlaceType[] } }>();

  return data;
};

export const getReviews = async (placeId: number, size: number, pageParam: number) => {
  const { data } = await ky.get('/db/reviews.json').json<{ data: { reviews: ReviewType[] } }>();

  return {
    data,
    pageParam,
  };
};

export const getImages = async (imageIds: number[]) => {
  const { data } = await api
    .get('api/v1/images', {
      searchParams: {
        imageIds: imageIds.join(','),
      },
    })
    .json<{ data: { images: ImageType[] } }>();
  // const {data} = await ky.get('/db/images.json');

  return data;
};
