import { getUserInfo } from './apis';
import { Keys } from './keys';
import { isLogin } from '@/utils/isLogin';
import { useSuspenseQuery } from '@suspensive/react-query';

import type { UserInfoParams } from './types';

export function useGetUserInfo(params: UserInfoParams) {
  return useSuspenseQuery(Keys.userInfo(params), () => getUserInfo(params), {
    enabled: isLogin(),
  });
}
