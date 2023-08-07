'use client';
import ShareIcon from './ShareIcon';
import { BottomSheet } from '@/components';
import { useRef } from 'react';

import type { SheetRef } from 'react-modal-sheet';

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
            <ShareIcon name="카카오톡" src="/assets/Icons/28/KakaoTalk.svg" />
            <ShareIcon name="Instagram" src="/assets/Icons/28/Instagram.svg" />
            <ShareIcon name="메시지" src="/assets/Icons/28/Message.svg" />
            <ShareIcon name="URL 복사" src="/assets/Icons/28/Link.svg" />
          </div>
          <div className="flex justify-between">
            <ShareIcon name="더보기" src="/assets/Icons/28/More.svg" />
          </div>
        </div>
      </div>
    </BottomSheet>
  );
}
