import api from '@/apis/config/instance';
import ky from 'ky';

import type { ImagesPayload } from './types';
import type { ImageObject } from '@/types/Image';

export const getImages = async (imageIds: number[]) => {
  // const { data } = await api
  //   .get('api/v1/images', {
  //     searchParams: {
  //       imageIds: imageIds.join(','),
  //     },
  //   })
  //   .json<APIResponse<{ images: ImageObject[] }>>();

  const { data } = await ky.get('/db/images.json').json<APIResponse<{ images: ImageObject[] }>>();

  return data;
};

export const postImages = async (payload: ImagesPayload) => {
  const { data } = await api
    .post('api/v1/images', {
      json: payload,
    })
    .json<APIResponse<{ images: ImageObject[] }>>();

  return data;
};
