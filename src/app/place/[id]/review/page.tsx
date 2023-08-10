import { ReviewTopNavigationBar } from './components';
import ReviewDetail from './components/ReviewDetail';
import { Loading } from '@/components';
import Spacing from '@/components/Spacing';
import { Suspense } from '@suspensive/react';

export default function ReviewsPage() {
  return (
    <main>
      <ReviewTopNavigationBar />
      <Spacing size={6} />
      <Suspense fallback={<Loading isBackDrop={false} />}>
        <ReviewDetail />
      </Suspense>
    </main>
  );
}
