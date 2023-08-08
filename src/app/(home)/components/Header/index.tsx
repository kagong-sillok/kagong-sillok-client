'use client';

import Tabs from './Tabs';
import { SideMenu, Spacing } from '@/components';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface HeaderProps {
  isBottomSheetUp: boolean;
}

export default function Header({ isBottomSheetUp }: HeaderProps) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const router = useRouter();

  return (
    <>
      <header className="fixed top-0 z-20 max-h-[112px] w-full max-w-[448px] bg-white text-bk100">
        <div className="mx-4 my-3 flex items-center bg-background px-3.5 py-2">
          <Image
            src={'/assets/Icons/28/Menu.svg'}
            alt="menu"
            width={28}
            height={28}
            className="cursor-pointer"
            onClick={() => setIsMenuVisible(true)}
          />
          <Spacing size={12} direction="horizontal" />
          <input
            type="text"
            className="w-full bg-background text-body1 outline-none placeholder:text-bk30"
            placeholder="어느 지역의 카페를 보여드릴까요?"
            onClick={() => router.push('/search')}
            readOnly
          />
        </div>
        {!isBottomSheetUp && (
          <>
            <Tabs />
            <button className="fixed left-1/2 top-[7.75rem] z-30 w-[138px] -translate-x-1/2 rounded-full bg-white py-2.5 text-body2 text-bk100 drop-shadow-md transition-colors active:bg-bk10">
              이 지역에서 재검색
            </button>
          </>
        )}
      </header>
      <AnimatePresence>
        {isMenuVisible && <SideMenu open={isMenuVisible} onClose={() => setIsMenuVisible(false)} />}
      </AnimatePresence>
    </>
  );
}
