import { Header, MapSection, SheetProvider } from './components';
import ErrorPage from '../error';
import { Keys, getPlaceConditions } from '@/apis/place';
import { HydrationProvider } from '@/providers/HydrationProvider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function HomePage() {
  return (
    <QueryAsyncBoundary rejectedFallback={<ErrorPage />} pendingFallback={null}>
      <SheetProvider>
        <HydrationProvider queryFn={() => getPlaceConditions()} queryKey={Keys.placeConditions()}>
          <Header />
        </HydrationProvider>
        <MapSection />
      </SheetProvider>
    </QueryAsyncBoundary>
  );
}
