import { PlaceDetail } from './components';
import { Keys as PlaceKeys, getPlace } from '@/apis/place';
import { Keys as ReviewKeys, getReviews } from '@/apis/review';
import Loading from '@/app/loading';
import { HydrationProvider } from '@/providers/HydrationProvider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

interface PlacePageProps {
  params: {
    id: string;
  };
}

export default function PlacePage({ params }: PlacePageProps) {
  const placeId = Number(params.id);

  return (
    <main>
      <QueryAsyncBoundary
        rejectedFallback={<div>에러가 발생했습니다.</div>}
        pendingFallback={<Loading />}
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
    </main>
  );
}
