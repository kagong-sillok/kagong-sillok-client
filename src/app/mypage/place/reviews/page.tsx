import { ReviewItem } from './components';
import { useGetMemberReviews } from '@/apis/review';

function Reviews() {
  const { data: reviewsData } = useGetMemberReviews(1); // memberId 들어가야 함

  return (
    <div className="px-6">
      {reviewsData?.pages.map(({ data }) =>
        data.reviews.map((review) => <ReviewItem key={review.id} review={review} />)
      )}
    </div>
  );
}

export default Reviews;
