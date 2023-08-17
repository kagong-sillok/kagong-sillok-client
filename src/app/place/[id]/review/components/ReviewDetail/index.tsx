'use client';
import { useGetPlaceReviews } from '@/apis/review';
import { ReviewList } from '@/app/place/components';
import { Spacing } from '@/components';
import { useParams } from 'next/navigation';

export default function ReviewDetail() {
  const params = useParams() as { id: string };
  const placeId = Number(params.id);

  const { data: reviewsData } = useGetPlaceReviews(placeId);

  return (
    <div className="h-full px-6">
      <ReviewList reviews={reviewsData.reviews} />
      <Spacing size={50} />
    </div>
  );
}
