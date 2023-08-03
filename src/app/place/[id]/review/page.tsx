'use client';

import { useGetReviews } from '@/apis/review';
import { ReviewItem } from '@/app/place/components';
import TopNavigationBar from '@/components/TopNavigationBar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();

  const placeId = Number(params.id);

  const { data: reviewsData } = useGetReviews(placeId);

  return (
    <main>
      <TopNavigationBar
        title="리뷰더보기"
        onBackClick={() => router.push(`/place/${placeId}`)}
        rightNode={
          <Image
            src="/assets/icons/28/Close.svg"
            alt="Close"
            width={28}
            height={28}
            onClick={() => router.push(`/place/${placeId}`)}
          />
        }
      />
      <div className="my-6 flex flex-col gap-5 px-6">
        {reviewsData?.pages.map(({ data }) =>
          data.reviews.map((review) => <ReviewItem key={review.id} review={review} />)
        )}
      </div>
    </main>
  );
}
