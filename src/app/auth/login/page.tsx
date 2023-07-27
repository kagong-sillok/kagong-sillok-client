'use client';

import KakaoButton from './components/KakaoButton';
import * as animationData from '../../../../public/assets/lotties/prography_motion_intro.json';
import Lottie from 'lottie-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6">
      <Lottie animationData={animationData} loop={true} className="h-52 flex-shrink-0" />
      <KakaoButton className="mb-4 mt-5" />
      <Link
        href="/"
        className="cursor-pointer text-[14px] font-normal leading-6 text-bk60 underline underline-offset-2"
      >
        로그인 없이 둘러보기
      </Link>
    </div>
  );
}
