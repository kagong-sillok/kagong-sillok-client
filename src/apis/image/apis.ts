import api from '@/apis/config/instance';
import { ImageObject } from '@/types/Image';
import { myBucket } from '@/utils/uploadImage';
import { S3 } from 'aws-sdk';

import type { ImageResponse, UploadImagesPayload } from './types';

export const getImages = async (imageIds: number[]) => {
  const { data } = await api.get<ImageResponse>('api/v1/images', {
    searchParams: {
      imageIds: imageIds.join(','),
    },
  });

  return data;
};

/**
 * 이미지를 서버에 업로드합니다.
 */
export const postImage = async (payload: ImageObject) => {
  const { data } = await api.post<ImageResponse>('api/v1/images', {
    json: payload,
  });

  return data;
};

/**
 * 이미지를 서버에 여러개 업로드합니다.
 */
const postImages = async (payload: ImageObject[]) => {
  const { data } = await api.post<ImageResponse>('api/v1/images/images', {
    json: payload,
  });

  return data;
};

/**
 * S3에 이미지를 업로드합니다.
 */
const uploadImage = async (file: File, folderName: string): Promise<ImageObject> => {
  const params: S3.Types.PutObjectRequest = {
    Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME as string,
    Key: folderName + '/' + file.name,
    Body: file,
    ACL: 'public-read',
    ContentType: file.type,
  };

  const data = await myBucket.upload(params).promise();

  return {
    url: data.Location,
    extension: file.type.split('/')[1],
    width: 100,
    height: 100,
  };
};

/**
 * S3에 이미지를 여러개 업로드합니다.
 */
export const uploadImages = async (payload: UploadImagesPayload) => {
  const { files, folderName } = payload;
  const promises = files.map((file) => uploadImage(file, folderName));
  const data = await Promise.all(promises);

  return postImages(data);
};
