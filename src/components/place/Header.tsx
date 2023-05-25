import Image from 'next/image';

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  return (
    <header className="absolute flex h-14 w-full justify-between px-6 py-3.5">
      <div className="flex items-center">
        <Image src="/assets/icons/28/Back.svg" alt="Back" width={28} height={28} />
        <p className="ml-3 text-button1">{name}</p>
      </div>
      <div className="flex items-center gap-3">
        <Image src="/assets/icons/28/Bookmark.svg" alt="Bookmark" width={28} height={28} />
        <Image src="/assets/icons/28/Share.svg" alt="Share" width={28} height={28} />
      </div>
    </header>
  );
}
