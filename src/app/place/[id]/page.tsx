import { PlaceDetail } from './components';
import { Keys as PlaceKeys, getPlace } from '@/apis/place';
import ErrorPage from '@/app/error';
import { Loading } from '@/components';
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
      <QueryAsyncBoundary rejectedFallback={<ErrorPage />} pendingFallback={<Loading />}>
        <HydrationProvider queryFn={() => getPlace(placeId)} queryKey={PlaceKeys.place(placeId)}>
          <PlaceDetail />
        </HydrationProvider>
      </QueryAsyncBoundary>
    </main>
  );
}
