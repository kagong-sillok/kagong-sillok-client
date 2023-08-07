import ky from 'ky';

import type { Review } from '@/types/review';

export const getReviews = async (placeId: number) => {
  const { data } = await ky.get('/db/reviews.json').json<APIResponse<{ reviews: Review[] }>>();

  return data;
};

export const getMemberReviews = async (memberId: number) => {
  const { data } = await ky.get('/db/reviews.json').json<APIResponse<{ reviews: Review[] }>>();

  return data;
};
