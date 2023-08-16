import { GalleryTopNavigationBar } from './components';
import GalleryDetail from './components/GalleryDetail';
import { Keys as PlaceKeys, getPlace } from '@/apis/place';
import { Keys as ReviewKeys, getReviewImages } from '@/apis/review';
import { Footer } from '@/app/place/components';
import { HydrationProvider } from '@/providers/HydrationProvider';
import { Suspense } from 'react';

interface GalleryPageProps {
  params: {
    id: string;
  };
}

export default function GalleryPage({ params }: GalleryPageProps) {
  const placeId = Number(params.id);

  return (
    <main>
      <Suspense fallback={null}>
        <HydrationProvider queryFn={() => getPlace(placeId)} queryKey={PlaceKeys.place(placeId)}>
          <GalleryTopNavigationBar />
        </HydrationProvider>
      </Suspense>
      <Suspense fallback={null}>
        <HydrationProvider
          queryFn={() => getReviewImages(placeId)}
          queryKey={ReviewKeys.reviewImages(placeId)}
        >
          <GalleryDetail />
        </HydrationProvider>
      </Suspense>
      <Footer />
    </main>
  );
}
