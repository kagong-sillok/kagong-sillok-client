'use client';

import Dot from './Dot';
import { RATING_TEXT } from '@/constants/place';
import { ReviewItem } from '@/types/mypage';
import { format } from 'date-fns';
import Image from 'next/image';

export default function ReviewItem({ data, isLast }: { data: ReviewItem; isLast: boolean }) {
  const { id, rating, createdAt, content } = data;
  const date = format(new Date(createdAt), 'yyyy.MM.dd');
  return (
    <>
      <div className="flex flex-col justify-start gap-3 p-6">
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex flex-col justify-start gap-1">
            <div className="flex flex-col justify-start">
              <div className="text-caption text-bk50">{date}</div>
              <div className="text-sub1">{id}</div>
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
          <div className="h-16 w-16 bg-bk30">이미지</div>
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
