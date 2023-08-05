'use client';

import { ReviewTopNavigationBar } from './components';
import { useGetReviews } from '@/apis/review';
import { ReviewList } from '@/app/place/components';
import Spacing from '@/components/Spacing';

export default function Page({ params }: { params: { id: string } }) {
  const placeId = Number(params.id);

  const { data: reviewsData } = useGetReviews(placeId);

  return (
    <main>
      <ReviewTopNavigationBar />
      <Spacing size={6} />
      <div className="px-6">
        <ReviewList reviewsData={reviewsData.reviews} />
      </div>
    </main>
  );
}
