'use client';
import { ReviewItem } from './components';
import { useGetMemberReviews } from '@/apis/review';
import { useGetUserInfo } from '@/apis/user';

function Reviews() {
  const { data: userInfoData } = useGetUserInfo({});
  const { data: reviewsData } = useGetMemberReviews(userInfoData?.id || -1);

  return (
    <div className="px-6">
      {reviewsData?.reviews?.map((review) => (
        <ReviewItem key={review.id} review={review} userId={userInfoData?.id || -1} />
      ))}
    </div>
  );
}

export default Reviews;
