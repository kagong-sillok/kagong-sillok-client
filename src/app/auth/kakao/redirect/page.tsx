'use client';

import { useLogin } from '@/apis/auth';
import { useEffect } from 'react';

export default function Redirect({
  searchParams,
}: {
  searchParams: {
    code: string;
  };
}) {
  const { mutate } = useLogin();

  useEffect(() => {
    if (!searchParams.code) return;
    mutate({
      authorizationCode: searchParams.code,
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI as string,
    });
  }, [mutate, searchParams.code]);

  return <></>;
}
