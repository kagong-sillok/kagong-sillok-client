'use client';

import { postLogin } from '@/apis/user';
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

  const func = async () => {
    const json = await postLogin(
      searchParams.code,
      process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI as string
    );

    console.log(json);

    setUser({
      nickname: 'test',
      email: 'test@aaa.com',
      role: 'USER',
    });
  };

  useEffect(() => {
    func();
    router.push('/');
  });

  return <></>;
}
