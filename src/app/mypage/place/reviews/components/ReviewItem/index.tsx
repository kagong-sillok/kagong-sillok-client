'use client';

import Dot from '@/app/mypage/components/Dot';
import { RATING_TEXT } from '@/app/place/constants';
import { format } from 'date-fns';
import Image from 'next/image';

import type { Review } from '@/apis/review';

interface ReviewItemProps {
  review: Review;
  isLast?: boolean;
}

export default function ReviewItem({ review, isLast = false }: ReviewItemProps) {
  const { id, rating, createdAt, content } = review;
  const date = format(new Date(createdAt), 'yy.MM.dd');
  return (
    <>
      <div className="flex flex-col justify-start gap-3 py-6">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex flex-col justify-start gap-1">
            <div className="flex flex-col justify-start">
              <div className="text-caption text-bk50">{date}</div>
              <div className="text-sub1">스타벅스 동대문공원점</div>
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
          <Image src="/assets/Icons/null.svg" width={64} height={64} alt="default" />
        </div>
        <div className="text-body2">{content}</div>
        <div
          className="mt-1 flex w-fit cursor-pointer flex-col justify-start text-body2 text-bk50 underline underline-offset-1"
          onClick={() => console.log(id)}
        >
          삭제
        </div>
      </div>
      {!isLast && <div className="h-px w-full bg-bk10" />}
    </>
  );
}
