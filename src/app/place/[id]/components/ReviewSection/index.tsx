'use client';
import Tooltip from './Tooltip';
import { useGetPlaceReviews } from '@/apis/review';
import { ReviewList, ReviewSheet } from '@/app/place/components';
import { Button, Spacing } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function ReviewSection() {
  const [isReviewSheetOpen, setIsReviewSheetOpen] = useState(false);

  const pathname = usePathname();
  const params = useParams();
  const placeId = Number(params.id);

  const { data: reviewsData } = useGetPlaceReviews(placeId);

  return (
    <>
      <section>
        <div className="flex justify-between">
          <h5 className="text-sub1">
            리뷰 <span className="text-violet/default">{reviewsData.reviews.length}</span>
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

        <Spacing size={47} />

        <div
          className="relative flex cursor-pointer justify-center gap-2"
          onClick={() => setIsReviewSheetOpen(true)}
        >
          <Tooltip className="absolute bottom-12">
            리뷰는 큰 힘이 돼요! 클릭해서 리뷰를 남겨주세요
          </Tooltip>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((item) => (
            <Image
              key={item}
              src={`/assets/icons/40/emoji-rating${item}_off.svg`}
              alt={`emoji-rating${item}_off`}
              width={40}
              height={40}
            />
          ))}
        </div>

        <Spacing size={40} />
        <hr className="text-bk10" />
        <Spacing size={24} />

        <ReviewList reviews={reviewsData.reviews} />

        <Spacing size={24} />
        <Button type="ROUND_DEFAULT" onClick={() => setIsReviewSheetOpen(true)}>
          리뷰 작성하기
        </Button>
      </section>
      <ReviewSheet
        isOpen={isReviewSheetOpen}
        onClose={() => setIsReviewSheetOpen(false)}
        placeId={placeId}
      />
    </>
  );
}
