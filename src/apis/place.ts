import ky from 'ky';

import type { PlaceType, ReviewType } from '@/types/place';

export const getPlace = async (id: string) => {
  console.log('getPlace: ', id);
  const data = await ky.get('/db/place.json');
  const json = await data.json<{ data: PlaceType }>();

  return json.data;
};

export const getReviews = async (placeId: string, size: number, pageParam: number) => {
  console.log(`/api/v1/reviews/search?page=${pageParam}&size=${size}&placeId=${placeId}`);
  const data = await ky.get('/db/reviews.json');
  const json = await data.json<{ data: ReviewType[] }>();

  return {
    data: json.data,
    pageParam,
  };
};
