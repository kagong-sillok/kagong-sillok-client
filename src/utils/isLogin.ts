import { getCookies } from 'cookies-next';

export function isLogin() {
  const { accessToken, refreshToken } = getCookies();

  return !!(accessToken && refreshToken);
}
