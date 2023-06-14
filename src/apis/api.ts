import ky from 'ky';

export const api = ky.create({
  prefixUrl: 'http://3.37.38.169:8080/api/v1/',
  hooks: {
    beforeRequest: [], // 요청 전 처리
    afterResponse: [], // 응답 후 에러 처리
  },
});

export const adminApi = ky.create({
  prefixUrl: 'http://3.37.38.169:8080/admin/v1/',
  hooks: {
    beforeRequest: [],
    afterResponse: [],
  },
});
