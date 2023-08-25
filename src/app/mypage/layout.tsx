import { LayoutHeader } from './components';
import { Loading } from '@/components';
import { QueryAsyncBoundary } from '@suspensive/react-query';

import type { PropsWithChildren } from 'react';

export default function MypageLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen">
      <QueryAsyncBoundary
        rejectedFallback={<div>에러가 발생했습니다.</div>}
        pendingFallback={<Loading />}
      >
        <LayoutHeader />
        <div className="h-[calc(100%-208px)] overflow-scroll">{children}</div>
      </QueryAsyncBoundary>
    </div>
  );
}
