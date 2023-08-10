import { PlaceDetail } from './components';
import { Loading } from '@/components';
import { QueryAsyncBoundary } from '@suspensive/react-query';

interface PlacePageProps {
  params: {
    id: string;
  };
}

export default function PlacePage({ params }: PlacePageProps) {
  const placeId = Number(params.id);

  // TODO: HydrateProvider로 prefetch했을 때 다른 곳에서 prefetch한 데이터가 덮어씌워지는 문제가 있음..
  return (
    <main>
      <QueryAsyncBoundary
        rejectedFallback={<div>에러가 발생했습니다.</div>}
        pendingFallback={<Loading />}
      >
        <PlaceDetail />
      </QueryAsyncBoundary>
    </main>
  );
}
