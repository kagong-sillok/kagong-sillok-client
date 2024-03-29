'use client';
import ShareSheet from '../../../components/ShareSheet';
import { MAP_HEIGHT } from '../../../constants';
import { TopNavigationBar } from '@/components';
import { useDetectScroll } from '@/hooks/useDetectScroll';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import type { Place } from '@/types/place';

interface PlaceTopNavigationBarProps {
  name: Place['name'];
}

export default function PlaceTopNavigationBar({ name }: PlaceTopNavigationBarProps) {
  const [isShareSheetOpen, setIsShareSheetOpen] = useState(false);
  const isScrolled = useDetectScroll(MAP_HEIGHT);

  const router = useRouter();

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: '카공실록',
        url: window.location.href,
      });
    } else {
      setIsShareSheetOpen(true);
    }
  };

  return (
    <>
      <TopNavigationBar
        title={isScrolled ? name : ''}
        className={isScrolled ? '' : 'bg-opacity-0 invert filter'}
        onBackClick={() => router.push('/')}
        rightNode={
          <>
            <Image
              src="/assets/icons/28/Bookmark.svg"
              alt="Bookmark"
              width={28}
              height={28}
              onClick={() => console.log('북마크 클릭')}
              className="cursor-pointer"
            />
            <Image
              src="/assets/icons/28/Share.svg"
              alt="Share"
              width={28}
              height={28}
              onClick={handleShareClick}
              className="cursor-pointer"
            />
          </>
        }
        isSpacing={false}
      />
      <ShareSheet isOpen={isShareSheetOpen} onClose={() => setIsShareSheetOpen(false)} />
    </>
  );
}
