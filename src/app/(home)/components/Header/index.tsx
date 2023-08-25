'use client';

import TagList from './TagList';
import { useSheetContext } from '../SheetProvider';
import { useMemberTotalDuration } from '@/apis/record';
import { useGetUserInfo } from '@/apis/user';
import { SideMenu, Spacing } from '@/components';
import { Suspense } from '@suspensive/react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { isBottomSheetUp } = useSheetContext();
  const router = useRouter();

  const { data: userInfoData } = useGetUserInfo({});
  const { data: totalDutationData } = useMemberTotalDuration(userInfoData?.id || -1);

  return (
    <>
      <header className="fixed top-0 z-20 max-h-[7rem] w-full max-w-[28rem] bg-white text-bk100">
        <div className="mx-4 my-3 flex items-center bg-background px-3.5 py-2">
          <Image
            src={'/assets/icons/28/Menu.svg'}
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
        {!isBottomSheetUp && <TagList />}
        <Spacing size={12} />
      </header>
      <Suspense.CSROnly fallback={null}>
        <AnimatePresence>
          {isMenuVisible && (
            <SideMenu
              open={isMenuVisible}
              onClose={() => setIsMenuVisible(false)}
              userInfo={userInfoData}
              totalDutation={totalDutationData || 0}
            />
          )}
        </AnimatePresence>
      </Suspense.CSROnly>
    </>
  );
}
