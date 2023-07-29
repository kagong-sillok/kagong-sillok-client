import api from '@/apis/config/instance';

import type { Image, ImagesPayload } from './types';

export const getImages = async (imageIds: number[]) => {
  const { data } = await api
    .get('api/v1/images', {
      searchParams: {
        imageIds: imageIds.join(','),
      },
    })
    .json<APIResponse<{ images: Image[] }>>();

  return data;
};

export const postImages = async (payload: ImagesPayload) => {
  const { data } = await api
    .post('api/v1/images', {
      json: payload,
    })
    .json<APIResponse<{ images: Image[] }>>();

  return data;
};
