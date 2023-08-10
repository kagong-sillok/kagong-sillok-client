'use client';

import * as animationData from '../../../public/assets/lotties/prography_motion_loading.json';
import Lottie from 'lottie-react';

interface LoadingProps {
  /**
   * @default true
   * 만약 false로 설정하면, 배경이 검은색으로 되어있지 않고 컨텐츠의 중앙에 로딩 애니메이션이 나타납니다.
   * */
  isBackDrop?: boolean;
}

export default function Loading({ isBackDrop = true }: LoadingProps) {
  if (isBackDrop) {
    return (
      <div className="fixed top-0 z-50 flex h-screen w-full min-w-[360px] max-w-[448px] items-center justify-center bg-black bg-opacity-40">
        <Lottie animationData={animationData} loop={true} className="h-16 w-16" />
      </div>
    );
  }

  return (
    <div className="min-h-128 flex h-full w-full items-center justify-center">
      <Lottie animationData={animationData} loop={true} className="h-16 w-16" />
    </div>
  );
}
