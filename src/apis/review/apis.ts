import api from '../config/instance';
import ky from 'ky';

import type { Review, ReviewImages, ReviewPayload } from '@/types/review';

export const getPlaceReviews = async (placeId: number) => {
  const { data } = await api.get<{ reviews: Review[] }>(`api/v1/reviews/place/${placeId}`, {
    cache: 'no-store',
  });

  return data;
};

export const getMemberReviews = async (memberId: number) => {
  const { data } = await api.get<{ reviews: Review[] }>(`api/v1/reviews/member/${memberId}`);

  return data;
};

export const postReview = async (payload: ReviewPayload) => {
  const { data } = await api.post<Review>('api/v1/reviews', {
    json: payload,
  });

  return data;
};

export const deleteReview = async (reviewId: number) => {
  const { data } = await api.delete(`api/v1/reviews/${reviewId}`);

  return data;
};

export const getReviewImages = async (placeId: number) => {
  const { data } = await api.get<ReviewImages>(`api/v1/reviews/images/${placeId}`, {
    cache: 'no-store',
  });

  return data;
};
