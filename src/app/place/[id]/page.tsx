import { PlaceDetail } from './components';
import { Keys as PlaceKeys, getPlace } from '@/apis/place';
import { Loading } from '@/components';
import { HydrationProvider } from '@/providers/HydrationProvider';
import { Suspense } from 'react';

interface PlacePageProps {
  params: {
    id: string;
  };
}

export default function PlacePage({ params }: PlacePageProps) {
  const placeId = Number(params.id);

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <HydrationProvider queryFn={() => getPlace(placeId)} queryKey={PlaceKeys.place(placeId)}>
          <PlaceDetail />
        </HydrationProvider>
      </Suspense>
    </main>
  );
}
