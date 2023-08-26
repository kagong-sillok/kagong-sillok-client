'use client';
import { ReviewItem } from './components';
import { useGetMemberReviews } from '@/apis/review';
import { useGetUserInfo } from '@/apis/user';
import { Spacing } from '@/components';
import Image from 'next/image';

function Reviews() {
  const { data: userInfoData } = useGetUserInfo({});
  const { data: reviewsData } = useGetMemberReviews(userInfoData?.id || -1);

  if (!reviewsData?.reviews?.length) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          src="/assets/icons/36/info.svg"
          alt="info"
          width={36}
          height={36}
          className="mt-[40px]"
        />
        <Spacing size={10} />
        <p className="text-caption text-bk60">카공을 기록해 보세요.</p>
      </div>
    );
  }

  return (
    <div className="px-6">
      {reviewsData?.reviews?.map((review) => (
        <ReviewItem key={review.id} review={review} userId={userInfoData?.id || -1} />
      ))}
    </div>
  );
}

export default Reviews;
