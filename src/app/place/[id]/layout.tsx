import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return <main className="min-h-screen bg-white">{children}</main>;
}
