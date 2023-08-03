'use client';
import Tooltip from './Tooltip';
import { useGetReviews } from '@/apis/review';
import { ReviewItem, ReviewSheet } from '@/app/place/components';
import { Button } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface ReviewSectionProps {
  placeId: number;
}

export default function ReviewSection({ placeId }: ReviewSectionProps) {
  const [isReviewSheetOpen, setIsReviewSheetOpen] = useState(false);

  const { data: reviewsData } = useGetReviews(placeId);

  const pathname = usePathname();

  return (
    <>
      <section>
        <div className="mb-[47px] flex justify-between">
          <h5 className="text-sub1">
            리뷰 <span className="text-violet/default">14</span>
          </h5>
          <Link
            href={`${pathname}/review`}
            className="flex cursor-pointer items-center gap-0.5 text-[14px] font-normal leading-5 text-bk60"
          >
            리뷰 더보기
            <Image
              src="/assets/icons/16/Arrow-right.svg"
              alt="Arrow-right"
              width={16}
              height={16}
              className="invert-[40%] filter"
            />
          </Link>
        </div>
        <div
          className="relative mb-10 flex cursor-pointer justify-center gap-2"
          onClick={() => setIsReviewSheetOpen(true)}
        >
          <Tooltip className="absolute bottom-12">
            리뷰는 큰 힘이 돼요! 클릭해서 리뷰를 남겨주세요
          </Tooltip>
          {[1, 2, 3, 4, 5].map((item) => (
            <Image
              key={item}
              src={`/assets/icons/40/emoji-rating${item}_off.svg`}
              alt={`emoji-rating${item}_off`}
              width={40}
              height={40}
            />
          ))}
        </div>

        <hr className="mb-6 text-bk10" />
        <div className="mb-6 flex flex-col gap-5">
          {reviewsData?.pages.map(({ data }) =>
            data.reviews.map((review) => <ReviewItem key={review.id} review={review} />)
          )}
        </div>
        <Button type="ROUND_DEFAULT" className="mb-10" onClick={() => setIsReviewSheetOpen(true)}>
          리뷰 작성하기
        </Button>
      </section>
      <ReviewSheet isOpen={isReviewSheetOpen} onClose={() => setIsReviewSheetOpen(false)} />
    </>
  );
}
