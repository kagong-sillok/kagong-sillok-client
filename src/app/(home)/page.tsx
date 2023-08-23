import { Header, MapSection, SheetProvider } from './components';
import { Keys, getPlaceConditions } from '@/apis/place';
import { Loading } from '@/components';
import { HydrationProvider } from '@/providers/HydrationProvider';
import { QueryAsyncBoundary } from '@suspensive/react-query';

export default function HomePage() {
  return (
    <QueryAsyncBoundary
      rejectedFallback={<div>에러가 발생했습니다.</div>}
      pendingFallback={<Loading />}
    >
      <SheetProvider>
        <HydrationProvider queryFn={() => getPlaceConditions()} queryKey={Keys.placeConditions()}>
          <Header />
        </HydrationProvider>
        <MapSection />
      </SheetProvider>
    </QueryAsyncBoundary>
  );
}
