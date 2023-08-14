'use client';
import { ReviewItem } from './components';
import { useGetMemberReviews } from '@/apis/review';
import { useGetUserInfo } from '@/apis/user';

function Reviews() {
  const { data: userInfoData } = useGetUserInfo({});
  const { data: reviewsData } = useGetMemberReviews(userInfoData?.id || -1); // memberId 들어가야 함

  return (
    <div className="px-6">
      {reviewsData?.reviews?.map((review) => <ReviewItem key={review.id} review={review} />)}
    </div>
  );
}

export default Reviews;
