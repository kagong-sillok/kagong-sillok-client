import { BottomSheet } from '@/components';
import Image from 'next/image';
import { useRef } from 'react';

import type { SheetRef } from 'react-modal-sheet';

interface IconButtonProps {
  name: string;
  src: string;
  onClick?: () => void;
}

function IconButton({ name, src, onClick }: IconButtonProps) {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center" onClick={onClick}>
      <button className="mb-[5px] flex h-10 w-10 items-center justify-center rounded-full border border-bk10">
        <Image src={src} alt={name} width={28} height={28} />
      </button>
      <p className="text-[10px] text-bk100">{name}</p>
    </div>
  );
}

interface ShareSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareSheet({ isOpen, onClose }: ShareSheetProps) {
  const ref = useRef<SheetRef>();

  return (
    <BottomSheet
      ref={ref}
      isOpen={isOpen}
      onClose={onClose}
      snapPoints={[240, 0]}
      isBackDrop={true}
    >
      <div className="h-full py-6">
        <p className="mb-4 ml-6 text-body2">공유하기</p>
        <div className="px-8">
          <div className="mb-4 flex justify-between">
            <IconButton name="카카오톡" src="/assets/Icons/28/KakaoTalk.svg" />
            <IconButton name="Instagram" src="/assets/Icons/28/Instagram.svg" />
            <IconButton name="메시지" src="/assets/Icons/28/Message.svg" />
            <IconButton name="URL 복사" src="/assets/Icons/28/Link.svg" />
          </div>
          <div className="flex justify-between">
            <IconButton name="더보기" src="/assets/Icons/28/More.svg" />
          </div>
        </div>
      </div>
    </BottomSheet>
  );
}
