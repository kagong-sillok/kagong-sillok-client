import { retryRequest } from './retryRequest';
import { setHeader } from './setHeader';
import ky from 'ky';

import type { Input, Options } from 'ky/distribution/types/options';

export const instance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    beforeRequest: [setHeader],
    afterResponse: [retryRequest],
  },
  retry: {
    limit: 2,
    statusCodes: [401, 403, 404, 500],
  },
});

const api = {
  get: <T>(url: Input, options?: Options) => instance.get(url, options).json<APIResponse<T>>(),
  post: <T>(url: Input, options?: Options) => instance.post(url, options).json<APIResponse<T>>(),
  put: <T>(url: Input, options?: Options) => instance.put(url, options).json<APIResponse<T>>(),
  delete: <T>(url: Input, options?: Options) =>
    instance.delete(url, options).json<APIResponse<T>>(),
};

export default api;
