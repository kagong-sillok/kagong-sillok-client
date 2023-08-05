'use client';
import { useGetImages } from '@/apis/image';
import { RATING_TEXT } from '@/app/place/constants';
import { format } from 'date-fns';
import Image from 'next/image';

import type { Review } from '@/types/review';

interface ReviewListProps {
  reviewsData: Review[];
}

export default function ReviewList({ reviewsData }: ReviewListProps) {
  return (
    <div className="flex flex-col gap-5">
      {reviewsData?.map((review) => <ReviewItem key={review.id} reviewData={review} />)}
    </div>
  );
}

interface ReviewItemProps {
  reviewData: Review;
}

function ReviewItem({ reviewData }: ReviewItemProps) {
  const { imageIds, content, memberNickname, rating, writtenAt } = reviewData;
  const { data: imagesData } = useGetImages(imageIds);

  return (
    <div className="flex gap-3.5">
      <div className="h-10 w-10 shrink-0 rounded-full bg-bk20"></div>
      <div className="flex flex-grow flex-col overflow-hidden">
        <div className="mb-[13px] flex h-10 justify-between">
          <div>
            <p className="text-body2">{memberNickname}</p>
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
        <div
          className={`mb-2.5 flex items-center gap-0.5 overflow-x-scroll ${
            imagesData?.images?.length ? '' : 'hidden'
          }`}
        >
          {imagesData?.images?.map((image, index) => (
            <div key={image.url + index} className="relative h-24 w-24 flex-shrink-0">
              <Image
                src={image.url}
                alt="review-image"
                className="object-cover"
                sizes="64px"
                fill
              />
            </div>
          ))}
        </div>
        <p className="text-body2">{content}</p>
      </div>
    </div>
  );
}
