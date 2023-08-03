import Rating from './Rating';
import { Button, ImageUpload, BottomSheet, Tabs } from '@/components';
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
        <div className="h-full px-6 pb-24 pt-8">
          <h3 className="mb-5 text-head3">
            스타벅스 동대문점은
            <br />
            어떠셨나요?
          </h3>
          <Rating rating={rating} onClick={handleRating} />
          <hr className="mb-6 mt-9 text-bk10" />
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
            <p className="mt-1 text-right text-caption">
              {text.length}
              <span className="text-bk40">/200</span>
            </p>
          </div>
          <hr className="my-6 text-bk10" />
          <div>
            <p className="mb-4 text-center text-body2 text-bk60">
              사진도 등록하고 카공을 공유해요!
            </p>
            <ImageUpload images={images} onUpload={(imageFiles) => setImages(imageFiles)} />
          </div>
        </div>
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
