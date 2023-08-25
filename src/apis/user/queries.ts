import { getUserInfo } from './apis';
import { Keys } from './keys';
import { isLogin } from '@/utils/isLogin';
import { useQuery } from '@tanstack/react-query';

import type { UserInfoParams } from './types';

export function useGetUserInfo(params: UserInfoParams) {
  return useQuery(Keys.userInfo(params), () => getUserInfo(params));
}
