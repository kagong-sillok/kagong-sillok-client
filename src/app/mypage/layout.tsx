import { LayoutHeader } from './components';

import type { PropsWithChildren } from 'react';

export default function MypageLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen">
      <LayoutHeader />
      <div className="h-[calc(100%-208px)] overflow-scroll">{children}</div>
    </div>
  );
}
