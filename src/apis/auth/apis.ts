import api from '@/apis/config/instance';

import type { LoginPayload, LoginResponse } from './types';

export const postLogin = async (payload: LoginPayload) => {
  const { data } = await api.post<LoginResponse>('api/v1/auth/kakao/login', {
    json: payload,
  });

  return data;
};

export const postRefresh = async (refreshToken: string) => {
  const { data } = await api.post<LoginResponse>('api/v1/auth/refresh', {
    json: { refreshToken },
  });

  return data;
};
