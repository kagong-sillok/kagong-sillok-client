import * as animationData from '../../public/assets/lotties/prography_motion_loading.json';
import Lottie from 'lottie-react';

export default function Loading() {
  return (
    <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-40">
      <Lottie animationData={animationData} loop={true} className="h-16 w-16" />
    </div>
  );
}
