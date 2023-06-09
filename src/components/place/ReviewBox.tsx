import { RATING_TEXT } from '@/constants/place';
import { useGetImages } from '@/hooks/queries/place/useGetImages';
import { format } from 'date-fns';
import Image from 'next/image';

import type { ReviewType } from '@/types/place';

interface ReviewBoxProps {
  review: ReviewType;
}

export default function ReviewBox({ review }: ReviewBoxProps) {
  const { data: imagesData } = useGetImages(review.imageIds || []);

  return (
    <div className="flex gap-3.5">
      <div className="h-10 w-10 shrink-0 rounded-full bg-bk20"></div>
      <div className="flex flex-grow flex-col overflow-hidden">
        <div className="mb-[13px] flex h-10 justify-between">
          <div>
            <p className="text-body2">{review.userNickname}</p>
            <div className="flex items-center">
              <Image
                src={`/assets/icons/40/emoji-rating${review.rating}_on.svg`}
                alt="emoji"
                width={16}
                height={16}
              />
              <p className="circle relative pl-2.5 text-[12px] font-normal text-bk40">
                {RATING_TEXT[review.rating - 1]}
              </p>
            </div>
          </div>
          <p className="text-caption text-bk40">{format(new Date(review.createdAt), 'yy.MM.dd')}</p>
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
        <p className="text-body2">{review.content}</p>
      </div>
    </div>
  );
}
