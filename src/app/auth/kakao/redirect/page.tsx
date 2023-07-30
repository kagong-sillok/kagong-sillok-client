'use client';

import { useLoginMutation } from '@/apis/auth';
import { useEffect } from 'react';

export default function Redirect({
  searchParams,
}: {
  searchParams: {
    code: string;
  };
}) {
  const { mutate } = useLoginMutation();

  useEffect(() => {
    mutate({
      authorizationCode: searchParams.code,
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI as string,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
