import { postLogin } from '.';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export function useLogin() {
  const router = useRouter();
  return useMutation(postLogin, {
    onSuccess: (data) => {
      setCookie('accessToken', data.accessToken);
      setCookie('refreshToken', data.refreshToken);

      router.push('/');
    },
  });
}
