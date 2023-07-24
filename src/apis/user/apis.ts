import api from '../api';

export const postLogin = async ({
  authorizationCode,
  redirectUri,
}: {
  authorizationCode: string;
  redirectUri: string;
}) => {
  const data = await api.post('api/v1/auth/kakao/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      authorizationCode,
      redirectUri,
    }),
  });

  const json = await data.json<{ data: { accessToken: string } }>();

  return json.data;
};
