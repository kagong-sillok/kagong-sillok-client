import { instance } from './instance';
import { postRefresh } from '../auth';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

import type { AfterResponseHook } from 'ky';

export const retryRequest: AfterResponseHook = async (request, options, response) => {
  if (response.status === 401 || response.status === 400) {
    try {
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
    } catch (error) {
      console.log('에러 발생');

      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      redirect('/auth/login');
    }
  }
};
