import { MAP_SIZE } from '@/constants/place';
import { useDetectScroll } from '@/hooks/useDetectScroll';
import Image from 'next/image';

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  const isScrolled = useDetectScroll(MAP_SIZE);

  const style = {
    SCROLLED: {
      background: 'bg-white',
      name: 'name-black',
      icon: '',
    },
    NOT_SCROLLED: {
      background: '',
      name: 'hidden',
      icon: 'filter invert',
    },
  }[isScrolled ? 'SCROLLED' : 'NOT_SCROLLED'];

  return (
    <header
      className={`fixed top-0 z-50 flex h-14 w-full min-w-[360px] max-w-[448px] justify-between px-6 py-3.5 ${style.background}`}
    >
      <div className="flex items-center">
        <Image
          src="/assets/icons/28/Back.svg"
          alt="Back"
          width={28}
          height={28}
          className={`cursor-pointer ${style.icon}`}
        />
        <p className={`ml-3 text-button1 ${style.name}`}>{name}</p>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src="/assets/icons/28/Bookmark.svg"
          alt="Bookmark"
          width={28}
          height={28}
          className={`cursor-pointer ${style.icon}`}
        />
        <Image
          src="/assets/icons/28/Share.svg"
          alt="Share"
          width={28}
          height={28}
          className={`cursor-pointer ${style.icon}`}
        />
      </div>
    </header>
  );
}
