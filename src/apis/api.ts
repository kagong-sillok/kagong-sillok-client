import ky from 'ky';

const api = ky.create({
  prefixUrl: 'http://3.37.38.169:8080/',
  hooks: {
    beforeRequest: [], // 요청 전 처리
    afterResponse: [], // 응답 후 에러 처리
  },
});

export default api;
