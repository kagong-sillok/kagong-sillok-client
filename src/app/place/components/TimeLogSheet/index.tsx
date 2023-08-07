'use client';
import { Button, ImageUpload, BottomSheet } from '@/components';
import Link from 'next/link';
import { useRef, useState } from 'react';

import type { SheetRef } from 'react-modal-sheet';

interface TimeLogSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TimeLogSheet({ isOpen, onClose }: TimeLogSheetProps) {
  const [images, setImages] = useState<File[]>([]);
  const [text, setText] = useState('');

  const ref = useRef<SheetRef>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) e.target.value = e.target.value.slice(0, 10);
    setText(e.target.value);
  };

  return (
    <>
      <BottomSheet
        ref={ref}
        isOpen={isOpen}
        onClose={onClose}
        snapPoints={[-70]}
        initialSnap={0}
        isBackDrop={true}
      >
        <div className="h-full px-6 pb-20 pt-8">
          <h3 className="mb-8 text-head3">
            스타벅스 동대문점에서의
            <br />
            카공을 기록해 보세요!
          </h3>
          <ImageUpload images={images} onUpload={(imageFiles) => setImages(imageFiles)} />

          <hr className="my-6 text-bk10" />

          <p className="mb-4 text-center text-body2 text-bk60">카공을 얼마나 했나요?</p>
          <div className="mx-auto flex h-28 w-28 items-center justify-between text-head2">
            <div className="flex flex-col items-center">
              <p>00</p>
              <p>01</p>
              <p>02</p>
            </div>
            <span className="text-body1">:</span>
            <div className="flex flex-col items-center">
              <p>00</p>
              <p>30</p>
              <p>00</p>
            </div>
          </div>

          <hr className="mb-6 mt-8 text-bk10" />

          <p className="mb-4 text-center text-body2 text-bk60">어떤걸 했나요?</p>
          <input
            type="text"
            placeholder="오늘 한 공부를 입력해 주세요. (최대10자)"
            alt="공부내용"
            maxLength={10}
            onChange={handleChange}
            className="mb-10 w-full bg-background p-4 text-body2 outline-none"
          />
          <Link
            href="/"
            className="block text-center text-[14px] font-normal leading-6 text-bk60 underline underline-offset-2"
          >
            리뷰도 쓰러가기
          </Link>
        </div>
      </BottomSheet>
      {isOpen && (
        <Button
          type="DEFAULT"
          className="fixed inset-x-0 bottom-0 z-[60] mx-auto w-full min-w-[360px] max-w-[448px]"
        >
          카공 기록등록
        </Button>
      )}
    </>
  );
}
