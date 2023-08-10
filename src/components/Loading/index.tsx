'use client';

import * as animationData from '../../../public/assets/lotties/prography_motion_loading.json';
import Lottie from 'lottie-react';

export default function Loading() {
  return (
    <div className="fixed top-0 z-50 flex h-screen w-full min-w-[360px] max-w-[448px] items-center justify-center bg-black bg-opacity-40">
      <Lottie animationData={animationData} loop={true} className="h-16 w-16" />
    </div>
  );
}
