'use client';

import Tabs from './Tabs';
import { useSheetContext } from '../SheetProvider';
import { useGetUserInfo } from '@/apis/user';
import { SideMenu, Spacing } from '@/components';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const isBottomSheetUp = useSheetContext((state) => state.isBottomSheetUp);

  const { data: userInfoData } = useGetUserInfo({});
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
        {!isBottomSheetUp && <Tabs />}
        <Spacing size={12} />
      </header>
      <AnimatePresence>
        {isMenuVisible && (
          <SideMenu
            open={isMenuVisible}
            onClose={() => setIsMenuVisible(false)}
            userInfo={userInfoData}
          />
        )}
      </AnimatePresence>
    </>
  );
}
