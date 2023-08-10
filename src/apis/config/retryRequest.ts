import { instance } from './instance';
import { postRefresh } from '../auth';
import { getCookie, setCookie } from 'cookies-next';

import type { AfterResponseHook } from 'ky';

export const retryRequest: AfterResponseHook = async (request, options, response) => {
  if (
    response.status === 401 ||
    response.status === 400 ||
    response.status === 403 ||
    response.status === 404 ||
    response.status === 500
  ) {
    const refreshToken = getCookie('refreshToken') as string;

    if (refreshToken) {
      const token = await postRefresh(refreshToken);

      setCookie('accessToken', token.accessToken, {
        expires: new Date(token.accessTokenExpireDateTime),
      });

      setCookie('refreshToken', token.refreshToken, {
        expires: new Date(token.refreshTokenExpireDateTime),
      });

      return instance(request, options);
    }
  }
};
