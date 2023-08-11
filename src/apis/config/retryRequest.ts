import { postRefresh } from '../auth';
import { getCookie, setCookie } from 'cookies-next';
import ky from 'ky';

import type { AfterResponseHook } from 'ky';

export const retryRequest: AfterResponseHook = async (request, options, response) => {
  if (response.status === 400 || response.status === 401) {
    const refreshToken = getCookie('refreshToken') as string;

    if (refreshToken) {
      try {
        const token = await postRefresh(refreshToken);

        setCookie('accessToken', token.accessToken, {
          expires: new Date(token.accessTokenExpireDateTime),
        });

        setCookie('refreshToken', token.refreshToken, {
          expires: new Date(token.refreshTokenExpireDateTime),
        });

        return ky(request, options);
      } catch (error) {
        console.log(error);
        window.alert('로그인이 필요합니다.');
        window.location.href = '/auth/login'; // TODO: Next의 Redirect가 안돼서 일단 이렇게 처리
      }
    }
  }
};
