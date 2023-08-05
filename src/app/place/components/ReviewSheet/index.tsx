'use client';
import Rating from './Rating';
import { Button, ImageUpload, BottomSheet, Tabs, Spacing } from '@/components';
import { useRef, useState } from 'react';

import type { SheetRef } from 'react-modal-sheet';

interface ReviewSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewSheet({ isOpen, onClose }: ReviewSheetProps) {
  const [currentSnap, setCurrentSnap] = useState(1);
  const [snapPoints, setSnapPoints] = useState<number[]>([-70, 280]);
  const [rating, setRating] = useState<number | null>(null);
  const [selectedTabIds, setSelectedTabIds] = useState<number[]>([]);
  const [text, setText] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const ref = useRef<SheetRef>();

  const handleRating = (selectRating: number) => {
    if (selectRating === rating) {
      setRating(null);
      return;
    }
    setRating(selectRating);

    if (currentSnap !== 0) {
      setCurrentSnap(0);
      setSnapPoints([-70]);
      ref.current?.snapTo(0);
    }
  };

  return (
    <>
      <BottomSheet
        ref={ref}
        isOpen={isOpen}
        onClose={onClose}
        snapPoints={snapPoints}
        initialSnap={currentSnap}
        isBackDrop={true}
        className={`${currentSnap === 1 ? '!overflow-hidden' : ''}`}
      >
        <Spacing size={32} />
        <div className="h-full px-6">
          <h3 className="mb-5 text-head3">
            스타벅스 동대문점은
            <br />
            어떠셨나요?
          </h3>
          <Rating rating={rating} onClick={handleRating} />

          <Spacing size={36} />
          <hr className="text-bk10" />
          <Spacing size={24} />

          <div>
            <p className="text-center text-body2 text-bk60">어떤 점이 좋았나요?</p>
            <Tabs selectedTabIds={selectedTabIds} setSelectedTabIds={setSelectedTabIds} />
            <textarea
              className="w-full resize-none bg-background p-4 text-body2 outline-none"
              placeholder="더 자세한 이야기를 들려주세요. (필수)"
              onChange={(e) => {
                if (e.target.value.length > 200) e.target.value = e.target.value.slice(0, 200);
                setText(e.target.value);
              }}
              rows={3}
              maxLength={200}
            />
            <Spacing size={4} />
            <p className="text-right text-caption">
              {text.length}
              <span className="text-bk40">/200</span>
            </p>
          </div>
          <Spacing size={24} />
          <hr className="text-bk10" />
          <div>
            <p className="text-center text-body2 text-bk60">사진도 등록하고 카공을 공유해요!</p>
            <Spacing size={16} />
            <ImageUpload images={images} onUpload={(imageFiles) => setImages(imageFiles)} />
          </div>
        </div>
        <Spacing size={96} />
      </BottomSheet>
      {isOpen && (
        <Button
          type="DEFAULT"
          className="fixed inset-x-0 bottom-0 z-[60] mx-auto w-full min-w-[360px] max-w-[448px]"
          disabled
        >
          리뷰등록
        </Button>
      )}
    </>
  );
}
