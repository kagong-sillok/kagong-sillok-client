import { postLogin } from '.';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export function useLogin() {
  const router = useRouter();

  return useMutation(postLogin, {
    onSuccess: (data) => {
      setCookie('accessToken', data.accessToken, {
        expires: new Date(data.accessTokenExpireDateTime),
      });
      setCookie('refreshToken', data.refreshToken, {
        expires: new Date(data.refreshTokenExpireDateTime),
      });

      router.push('/');
    },
  });
}
