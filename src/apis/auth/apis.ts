import api from '@/apis/config/instance';
import ky from 'ky';

import type { LoginPayload, LoginResponse } from './types';

export const postLogin = async (payload: LoginPayload) => {
  const { data } = await api.post<LoginResponse>('api/v1/auth/kakao/login', {
    json: payload,
  });

  return data;
};

export const postRefresh = async (refreshToken: string) => {
  const { data } = await ky
    .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/refresh`, {
      json: { refreshToken },
    })
    .json<APIResponse<LoginResponse>>();

  return data;
};
