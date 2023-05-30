'use client';

import BottomSheet from '../common/BottomSheet';
import Button from '@/components/common/Button';
import Rating from '@/components/place/Rating';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { SheetRef } from 'react-modal-sheet';

interface ReviewSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewSheet({ isOpen, onClose }: ReviewSheetProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [text, setText] = useState<string>('');
  const ref = useRef<SheetRef>();

  return (
    <BottomSheet
      ref={ref}
      isOpen={isOpen}
      onClose={onClose}
      snapPoints={[1000, 280]}
      initialSnap={1}
      onOpenStart={() => {
        ref.current?.snapTo(1);
      }}
      onOpenEnd={() => {
        ref.current?.snapTo(0);
      }}
      hasBackDropOpacity={true}
    >
      <div id="bottomSheet" className="h-full bg-white px-6 py-8">
        <h3 className="mb-5 text-head3">스타벅스 동대문점은 어떠셨나요?</h3>
        <Rating
          rating={rating}
          onClick={(selectRating) => {
            setRating(selectRating);
            ref.current?.snapTo(0);
          }}
        />
      </div>
    </BottomSheet>
  );
}
// <div className="h-screen bg-bk40 pt-[70px]">
//   <div id="bottomSheet" className="h-full bg-white px-4 py-8">
//     <h3 className="mb-5 text-head3">스타벅스 동대문점은 어떠셨나요?</h3>
//     <Rating rating={rating} onClick={(selectRating) => setRating(selectRating)} />
//     <hr className="mb-6 mt-9 text-bk10" />
//     <div>
//       <p className="text-center text-body2 text-bk60">어떤 점이 좋았나요?</p>
//       <div className="mb-9 mt-4 h-[74px] w-full bg-violet/default"></div>
//       <textarea
//         className="h-[123px] w-full resize-none bg-background p-4 outline-none"
//         placeholder="더 자세한 이야기를 들려주세요. (필수)"
//         onChange={(e) => setText(e.target.value)}
//         maxLength={200}
//       />
//       <p className="ml-auto mt-1 text-caption">
//         {text.length}
//         <span className="text-bk40">/200</span>
//       </p>
//     </div>
//     <hr className="my-6 text-bk10" />
//     <div>
//       <p className="mb-4 text-center text-body2 text-bk60">사진도 등록하고 카공을 공유해요!</p>
//       <div className="mb-24 flex gap-2">
//         <div className="flex h-[72px] w-[72px] shrink-0 flex-col items-center justify-center bg-background">
//           <Image src="/assets/icons/32/Camera.svg" alt="camera" width={32} height={32} />
//           <p>
//             4<span className="text-bk40">/5</span>
//           </p>
//         </div>
//         <div className="flex gap-2 overflow-hidden overflow-x-scroll">
//           <div className="h-[72px] w-[72px] shrink-0 bg-black"></div>
//           <div className="h-[72px] w-[72px] shrink-0 bg-black"></div>
//           <div className="h-[72px] w-[72px] shrink-0 bg-black"></div>
//           <div className="h-[72px] w-[72px] shrink-0 bg-black"></div>
//           <div className="h-[72px] w-[72px] shrink-0 bg-black"></div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <footer>
//     <Button type="DEFAULT" className="fixed bottom-0 z-50">
//       리뷰등록
//     </Button>
//   </footer>
// </div>
