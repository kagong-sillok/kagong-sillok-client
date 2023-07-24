'use client';

import { useLoginMutation } from '@/apis/user';
import { useUserStore } from '@/store/userState';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Redirect({
  searchParams,
}: {
  searchParams: {
    code: string;
  };
}) {
  const { setUser } = useUserStore();
  const router = useRouter();

  const { mutate } = useLoginMutation({
    onSuccess: () => {
      setUser({
        nickname: 'test',
        email: 'test@gmail.com',
        role: 'USER',
      });
      router.push('/');
    },
  });

  useEffect(() => {
    mutate({
      authorizationCode: searchParams.code,
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI as string,
    });
  }, []);

  return <></>;
}
