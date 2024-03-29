'use client';

import { useDeleteReviewMutation } from '@/apis/review';
import Dot from '@/app/mypage/components/Dot';
import { RATING_TEXT } from '@/app/place/constants';
import { Button, Modal } from '@/components';
import { format } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';

import type { Review } from '@/types/review';

interface ReviewItemProps {
  review: Review;
  isLast?: boolean;
  userId: number;
}

export default function ReviewItem({ review, isLast = false, userId }: ReviewItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id, rating, writtenAt, content, images, placeName } = review;
  const date = format(new Date(writtenAt), 'yy.MM.dd');

  const { mutate: deleteReview } = useDeleteReviewMutation(userId);

  return (
    <>
      <div className="flex flex-col justify-start gap-3 py-6">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex flex-col justify-start gap-1">
            <div className="flex flex-col justify-start">
              <div className="text-caption text-bk50">{date}</div>
              <div className="text-sub1">{placeName}</div>
            </div>

            <div className="mt-1.5 flex items-center gap-0.5 text-caption text-bk40">
              <Image
                src={`/assets/icons/40/emoji-rating${rating}_on.svg`}
                alt={`emoji-rating${rating}`}
                width={16}
                height={16}
                className="cursor-pointer"
              />
              <Dot />
              <div>{RATING_TEXT[rating - 1]}</div>
            </div>
          </div>
          <Image
            src={images[0]?.url || '/assets/Icons/null.svg'}
            width={64}
            height={64}
            alt="default"
          />
        </div>
        <div className="text-body2">{content}</div>
        <div
          className="mt-1 flex w-fit cursor-pointer flex-col justify-start text-body2 text-bk50 underline underline-offset-1"
          onClick={() => setIsModalOpen(true)}
        >
          삭제
        </div>
      </div>
      {!isLast && <div className="h-px w-full bg-bk10" />}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Content>
          <p>
            작성한 리뷰를 삭제할 경우 재작성이 불가합니다.
            <br />
            삭제하시겠습니까?
          </p>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={() => setIsModalOpen(false)}>취소</Button>
          <Button
            onClick={() =>
              deleteReview(id, {
                onSuccess: () => setIsModalOpen(false),
              })
            }
          >
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
