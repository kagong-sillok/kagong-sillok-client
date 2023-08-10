import api from '@/apis/config/instance';

import type { UserInfoParams } from './types';
import type { User } from '@/types/user';

export const getUserInfo = async (params: UserInfoParams) => {
  const { data } = await api.get<User>('api/v1/members', {
    searchParams: { ...params },
  });

  return data;
};
