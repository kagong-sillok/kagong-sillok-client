'use client';
import { useGetImages } from '@/apis/image';
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
      <div className="flex flex-col items-center justify-center gap-3">
        <Image
          src="/assets/icons/40/emoji-rating3_off.svg"
          alt="emoji-rating0_off"
          width={40}
          height={40}
        />
        <p className="text-body2 text-bk40">아직 리뷰가 없어요</p>
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
  const { imageIds, content, memberNickName, rating, writtenAt } = review;
  const { data: imagesData } = useGetImages(imageIds);

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
          className={`flex items-center gap-0.5 overflow-x-scroll ${
            imagesData?.images?.length ? '' : 'hidden'
          }`}
        >
          {imagesData?.images?.map((image, index) => (
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
