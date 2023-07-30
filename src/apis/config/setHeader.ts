import { getCookie } from 'cookies-next';

import type { BeforeRequestHook } from 'ky';

export const setHeader: BeforeRequestHook = (request) => {
  const accessToken = getCookie('accessToken');

  if (accessToken) {
    request.headers.set('Authorization', `Bearer ${accessToken}`);
  }
};
