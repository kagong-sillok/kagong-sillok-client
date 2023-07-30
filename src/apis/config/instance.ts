import { retryRequest } from './retryRequest';
import { setHeader } from './setHeader';
import ky from 'ky';

const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    beforeRequest: [setHeader],
    afterResponse: [retryRequest],
  },
});

export default api;
