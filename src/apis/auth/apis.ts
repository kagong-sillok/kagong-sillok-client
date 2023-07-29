import api from '@/apis/config/instance';

import type { LoginPayload, LoginResponse } from './types';

export const postLogin = async (payload: LoginPayload) => {
  const { data } = await api
    .post('api/v1/auth/kakao/login', {
      json: payload,
    })
    .json<APIResponse<LoginResponse>>();

  return data;
};
