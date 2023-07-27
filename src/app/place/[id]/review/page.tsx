'use client';

import { Header, ReviewItem } from '../components';
import { useGetReviews } from '@/apis/place';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();

  const placeId = Number(params.id);

  const { data: reviewsData } = useGetReviews(placeId);

  return (
    <div className="pt-14">
      <Header
        name="리뷰더보기"
        onBackClick={() => router.push(`/place/${placeId}`)}
        rightIcons={[
          {
            src: '/assets/icons/28/Close.svg',
            alt: 'Close',
            width: 28,
            height: 28,
            onClick: () => router.push(`/place/${placeId}`),
          },
        ]}
      />
      <div className="my-6 flex flex-col gap-5 px-6">
        {reviewsData?.pages.map(({ data }) =>
          data.reviews.map((review) => <ReviewItem key={review.id} review={review} />)
        )}
      </div>
    </div>
  );
}
