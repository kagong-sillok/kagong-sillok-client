'use client';
import Rating from './Rating';
import { useImagesUpload } from '@/apis/image';
import { usePostReviewMutation } from '@/apis/review';
import { Button, ImageUpload, BottomSheet, Tabs, Spacing } from '@/components';
import { useRef, useState } from 'react';

import type { SheetRef } from 'react-modal-sheet';

interface ReviewSheetProps {
  isOpen: boolean;
  placeId: number;
  memberId: number | undefined;
  onClose: () => void;
}

export default function ReviewSheet({ isOpen, placeId, memberId, onClose }: ReviewSheetProps) {
  const [currentSnap, setCurrentSnap] = useState(1);
  const [snapPoints, setSnapPoints] = useState<number[]>([-70, 280]);
  const [rating, setRating] = useState<number | null>(null);
  const [selectedTabIds, setSelectedTabIds] = useState<number[]>([]);
  const [content, setContent] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const { mutateAsync: uploadImagesMutateAsync } = useImagesUpload();
  const { mutate: postReviewMutate } = usePostReviewMutation(placeId);

  const ref = useRef<SheetRef>();

  if (!memberId) return null;

  const handleRatingClick = (selectRating: number) => {
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

  const handlePostReviewClick = async () => {
    if (!rating || !content) return;

    const imageIds = !!images.length
      ? await uploadImagesMutateAsync({
          files: images,
          folderName: 'review',
        }).then((res) => res.images.map((image) => image.id))
      : [];

    postReviewMutate({
      placeId,
      rating,
      content,
      imageIds,
      memberId,
      reviewtagIds: selectedTabIds,
    });
  };

  return (
    <>
      <BottomSheet
        ref={ref}
        isOpen={isOpen}
        onClose={onClose}
        snapPoints={snapPoints}
        initialSnap={currentSnap}
        className={`${currentSnap === 1 ? '!overflow-hidden' : ''}`}
        isBackDrop
        // isScrollable
      >
        <Spacing size={32} />
        <div className="h-full px-6">
          <h3 className="mb-5 text-head3">
            스타벅스 동대문점은
            <br />
            어떠셨나요?
          </h3>
          <Rating rating={rating} onClick={handleRatingClick} />

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
                setContent(e.target.value);
              }}
              rows={3}
              maxLength={200}
            />
            <Spacing size={4} />
            <p className="text-right text-caption">
              {content.length}
              <span className="text-bk40">/200</span>
            </p>
          </div>
          <Spacing size={24} />
          <hr className="text-bk10" />
          <Spacing size={24} />
          <div>
            <p className="text-center text-body2 text-bk60">사진도 등록하고 카공을 공유해요!</p>
            <Spacing size={16} />
            <ImageUpload images={images} onUpload={(imageFiles) => setImages(imageFiles)} />
          </div>
        </div>
      </BottomSheet>
      {isOpen && (
        <Button
          type="DEFAULT"
          className="fixed inset-x-0 bottom-0 z-[60] mx-auto w-full min-w-[360px] max-w-[448px]"
          disabled={!rating || !content}
          onClick={handlePostReviewClick}
        >
          리뷰등록
        </Button>
      )}
    </>
  );
}
