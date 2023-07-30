import api from './instance';
import { postRefresh } from '../auth';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

import type { AfterResponseHook } from 'ky';

export const retryRequest: AfterResponseHook = async (request, options, response) => {
  if (response.status === 401) {
    try {
      const refreshToken = getCookie('refreshToken') as string;

      if (refreshToken) {
        const token = await postRefresh(refreshToken);

        setCookie('accessToken', token.accessToken);
        setCookie('refreshToken', token.refreshToken);

        return api(request, options);
      }
    } catch (error) {
      console.log(error);

      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      redirect('/auth/login');
    }
  }
};
