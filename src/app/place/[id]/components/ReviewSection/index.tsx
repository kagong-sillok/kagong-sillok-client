'use client';
import Tooltip from './Tooltip';
import { useGetPlaceReviews } from '@/apis/review';
import { useGetUserInfo } from '@/apis/user';
import { ReviewList, ReviewSheet } from '@/app/place/components';
import { Button, Modal, Spacing } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ReviewSection() {
  const [isReviewSheetOpen, setIsReviewSheetOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pathname = usePathname();
  const params = useParams() as { id: string };
  const placeId = Number(params.id);

  const { data: userInfoData } = useGetUserInfo({});
  const { data: reviewsData } = useGetPlaceReviews(placeId);

  const handleReviewClick = () => {
    if (!userInfoData?.id) return setIsModalOpen(true);
    setIsReviewSheetOpen(true);
  };

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
          onClick={handleReviewClick}
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

        <ReviewList reviews={reviewsData.reviews.slice(0, 6)} />

        <Spacing size={24} />
        <Button type="ROUND_DEFAULT" onClick={handleReviewClick}>
          리뷰 작성하기
        </Button>
      </section>
      <ReviewSheet
        isOpen={isReviewSheetOpen}
        onClose={() => setIsReviewSheetOpen(false)}
        placeId={placeId}
        memberId={userInfoData?.id}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Content>
          로그인이 필요한 서비스예요. <br />
          <Link href="/auth/login" className="inline-block">
            <p className="cursor-pointer text-[14px] font-normal leading-6 text-bk60 underline underline-offset-2">
              로그인 하러가기
            </p>
          </Link>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={() => setIsModalOpen(false)}>확인</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
