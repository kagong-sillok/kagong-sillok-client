import PlaceDetail from './components/PlaceDetail';
import { Keys, getPlace } from '@/apis/place';
import { HydrationProvider } from '@/providers/HydrationProvider';
import { Suspense } from '@suspensive/react';

export default function PlacePage({ params }: { params: { id: string } }) {
  const placeId = Number(params.id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HydrationProvider queryKey={Keys.place(placeId)} queryFn={() => getPlace(placeId)}>
        <PlaceDetail placeId={placeId} />
      </HydrationProvider>
    </Suspense>
  );
}
