import { LayoutHeader } from './components';
import { Suspense, type PropsWithChildren } from 'react';

export default function MypageLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen">
      <Suspense fallback={null}>
        <LayoutHeader />
        <div className="h-[calc(100%-208px)] overflow-scroll">{children}</div>
      </Suspense>
    </div>
  );
}
