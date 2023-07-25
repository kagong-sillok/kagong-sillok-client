import ky from 'ky';

const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    beforeRequest: [], // 요청 전 처리
    afterResponse: [], // 응답 후 처리
  },
});

export default api;
