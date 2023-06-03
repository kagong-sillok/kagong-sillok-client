import ky from 'ky';

import type { PlaceType, ReviewType } from '@/types/place';

export const getPlace = async (id: string) => {
  console.log('getPlace: ', id);
  const data = await ky.get('/db/place.json');

  return data.json<{ data: PlaceType }>();
};

export const getReviews = async (placeId: string) => {
  console.log('getReviewsById: ', placeId);
  const data = await ky.get('/db/reviews.json');

  return data.json<{ data: ReviewType[] }>();
};
