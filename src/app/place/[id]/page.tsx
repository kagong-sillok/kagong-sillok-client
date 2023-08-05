import { PlaceDetail } from './components';
import { Keys as PlaceKeys, getPlace } from '@/apis/place';
import { Keys as ReviewKeys, getReviews } from '@/apis/review';
import { HydrationProvider } from '@/providers/HydrationProvider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function PlacePage({ params }: { params: { id: string } }) {
  const placeId = Number(params.id);

  return (
    <QueryAsyncBoundary
      rejectedFallback={<div>에러가 발생했습니다.</div>}
      pendingFallback={<div>로딩중...</div>}
    >
      <HydrationProvider queryKey={PlaceKeys.place(placeId)} queryFn={() => getPlace(placeId)}>
        <HydrationProvider
          queryKey={ReviewKeys.reviews(placeId)}
          queryFn={() => getReviews(placeId)}
        >
          <PlaceDetail placeId={placeId} />
        </HydrationProvider>
      </HydrationProvider>
    </QueryAsyncBoundary>
  );
}
