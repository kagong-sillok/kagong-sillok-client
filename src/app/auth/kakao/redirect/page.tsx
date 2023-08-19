import { postLogin } from '@/apis/auth';
import { redirect } from 'next/navigation';

export default async function Redirect({
  searchParams,
}: {
  searchParams: {
    code: string;
  };
}) {
  await postLogin({
    authorizationCode: searchParams.code,
    redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI as string,
  }).then(() => {
    redirect('/');
  });

  return <></>;
}
