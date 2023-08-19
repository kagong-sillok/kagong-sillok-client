import { postLogin } from '@/apis/auth';
import { setCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

export default async function Redirect({
  searchParams,
}: {
  searchParams: {
    code: string;
  };
}) {
  redirect(`/auth/login?code=${JSON.stringify(searchParams)}`);
  // await postLogin({
  //   authorizationCode: searchParams?.code,
  //   redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI as string,
  // }).then((res) => {
  //   setCookie('accessToken', res.accessToken, {
  //     expires: new Date(res.accessTokenExpireDateTime),
  //   });
  //   setCookie('refreshToken', res.refreshToken, {
  //     expires: new Date(res.refreshTokenExpireDateTime),
  //   });
  //   redirect('/');
  // });

  // return <></>;
}
