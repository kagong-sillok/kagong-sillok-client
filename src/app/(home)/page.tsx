import HomeDetail from './components/HomeDetail';
import { getPlacesAround } from '@/apis/place';
import { Keys } from '@/apis/place/keys';
import { Loading } from '@/components';
import { DEFAULT_COORDINATES } from '@/constants/map';
import { HydrationProvider } from '@/providers/HydrationProvider';
import { AsyncBoundary } from '@suspensive/react';

export default function HomePage() {
  return (
    <AsyncBoundary rejectedFallback={<div>Something went wrong</div>} pendingFallback={<Loading />}>
      <HydrationProvider
        queryFn={() => getPlacesAround(DEFAULT_COORDINATES)}
        queryKey={Keys.placesAround(DEFAULT_COORDINATES)}
      >
        <HomeDetail />
      </HydrationProvider>
    </AsyncBoundary>
  );
}
