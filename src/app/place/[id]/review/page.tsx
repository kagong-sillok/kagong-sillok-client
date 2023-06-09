'use client';

import { Header, ReviewBox } from '@/components/place';
import { useGetReviews } from '@/hooks/queries/place/useGetReviews';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();

  const { data: reviews } = useGetReviews(params.id);

  return (
    <div className="pt-14">
      <Header
        name="리뷰더보기"
        onLeftClick={() => router.push(`/place/${params.id}`)}
        rightIcons={[
          {
            src: '/assets/icons/28/Close.svg',
            alt: 'Close',
            width: 28,
            height: 28,
            onClick: () => router.push(`/place/${params.id}`),
          },
        ]}
      />
      <div className="my-6 flex flex-col gap-5 px-6">
        {reviews?.pages.map(({ data }) =>
          data.map((review) => <ReviewBox key={review.id} review={review} />)
        )}
      </div>
    </div>
  );
}
