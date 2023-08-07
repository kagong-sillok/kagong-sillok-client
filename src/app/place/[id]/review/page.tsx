import { ReviewTopNavigationBar } from './components';
import { ReviewList } from '@/app/place/components';
import Spacing from '@/components/Spacing';
import { Suspense } from '@suspensive/react';

export default function ReviewsPage({ params }: { params: { id: string } }) {
  const placeId = Number(params.id);

  return (
    <main>
      <ReviewTopNavigationBar />
      <Spacing size={6} />
      <Suspense fallback={null}>
        <div className="px-6">
          <ReviewList placeId={placeId} />
        </div>
      </Suspense>
    </main>
  );
}
