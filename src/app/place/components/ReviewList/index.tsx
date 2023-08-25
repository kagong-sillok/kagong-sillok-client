'use client';
import { RATING_TEXT } from '@/app/place/constants';
import { Spacing } from '@/components';
import { format } from 'date-fns';
import Image from 'next/image';

import type { Review } from '@/types/review';

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  if (!reviews.length) {
    return (
      <div className="flex flex-col items-center">
        <span className="text-body2">아직 작성된 리뷰가 없어요.</span>
        <span className="text-sub2">첫 리뷰를 남겨주세요!</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
}

interface ReviewItemProps {
  review: Review;
}

function ReviewItem({ review }: ReviewItemProps) {
  const { images, content, memberNickName, rating, writtenAt } = review;

  return (
    <div className="flex gap-3.5">
      <div className="h-10 w-10 shrink-0 rounded-full bg-bk20"></div>
      <div className="flex flex-grow flex-col overflow-hidden">
        <div className="flex h-10 justify-between">
          <div>
            <p className="text-body2">{memberNickName}</p>
            <div className="flex items-center">
              <Image
                src={`/assets/icons/40/emoji-rating${rating}_on.svg`}
                alt="emoji"
                width={16}
                height={16}
              />
              <p className="circle relative pl-2.5 text-[12px] font-normal text-bk40">
                {RATING_TEXT[rating - 1]}
              </p>
            </div>
          </div>
          <p className="text-caption text-bk40">{format(new Date(writtenAt), 'yy.MM.dd')}</p>
        </div>
        <Spacing size={13} />
        <div
          className={`flex items-center gap-0.5 overflow-x-scroll ${images.length ? '' : 'hidden'}`}
        >
          {images.map((image, index) => (
            <div key={image.url + index} className="relative h-24 w-24 flex-shrink-0">
              <Image
                src={image.url}
                alt="review-image"
                className="object-cover"
                sizes="96px"
                fill
              />
            </div>
          ))}
        </div>
        <Spacing size={10} />
        <p className="whitespace-pre-line text-body2">{content}</p>
      </div>
    </div>
  );
}
