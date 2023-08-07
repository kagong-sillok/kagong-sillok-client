import ky from 'ky';

import type { Review } from '@/types/review';

/**
 * api 나오면 수정
 */
export const getReviews = async (placeId: number) => {
  const { data } = await ky.get('/db/reviews.json').json<APIResponse<{ reviews: Review[] }>>();

  return data;
};
