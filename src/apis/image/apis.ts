import api from '@/apis/config/instance';
import ky from 'ky';

import type { ImagesPayload } from './types';
import type { ImageObject } from '@/types/Image';

export const getImages = async (imageIds: number[]) => {
  const { data } = await api.get<{ images: ImageObject[] }>('api/v1/images', {
    searchParams: {
      imageIds: imageIds.join(','),
    },
  });

  return data;
};

export const postImages = async (payload: ImagesPayload) => {
  const { data } = await api.post<{ images: ImageObject[] }>('api/v1/images', {
    json: payload,
  });

  return data;
};
