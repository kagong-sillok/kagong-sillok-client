import ky from 'ky';

import type { Review } from './types';

export const getReviews = async (placeId: number, size: number, pageParam: number) => {
  const { data } = await ky.get('/db/reviews.json').json<APIResponse<{ reviews: Review[] }>>();

  return {
    data,
    pageParam,
  };
};

export const getMemberReviews = async (memberId: number, size: number, pageParam: number) => {
  const { data } = await ky.get('/db/reviews.json').json<APIResponse<{ reviews: Review[] }>>();

  return {
    data,
    pageParam,
  };
};
