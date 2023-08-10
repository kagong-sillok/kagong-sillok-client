import type { UserInfoParams } from './types';

export const Keys = Object.freeze({
  userInfo: (params: UserInfoParams) => ['userInfo', params],
});
