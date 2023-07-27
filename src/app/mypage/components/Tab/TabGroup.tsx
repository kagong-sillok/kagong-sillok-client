import type { PropsWithChildren } from 'react';

export default function TabGroup({ children }: PropsWithChildren) {
  return (
    <div className="relative grid grid-cols-2 px-[24px] pt-3">
      {children}
      <div className="absolute bottom-0 -z-10 h-px w-full bg-bk10" />
    </div>
  );
}
