import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return <main className="bg-white">{children}</main>;
}
