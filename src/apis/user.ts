import ky from 'ky';

export const postLogin = async (authorizationCode: string, redirectUri: string) => {
  const data = await ky.post('http://localhost:8080/api/v1/auth/kakao/join', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      authorizationCode,
      redirectUri,
    }),
  });

  return data.json();
};
