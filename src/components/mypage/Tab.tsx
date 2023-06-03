import Link from 'next/link';

function Tab({ label, active, href }: { label: string; active: boolean; href: string }) {
  const tabLabel = active ? 'pb-2.5 text-sub2' : 'pb-2.5 text-body2  text-bk40';
  const tabBar = active ? 'h-0.5 w-full bg-bk100' : 'h-0.5 w-full';
  return (
    <Link
      href={href}
      className="bg-slate-400 flex w-full cursor-pointer flex-col items-center justify-end "
    >
      <div className={tabLabel}>{label}</div>
      <div className={tabBar} />
    </Link>
  );
}

export default Tab;
