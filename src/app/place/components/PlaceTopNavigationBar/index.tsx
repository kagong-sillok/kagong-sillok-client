'use client';
import { MAP_HEIGHT } from '../../constants';
import Header from '../Header';
import ShareSheet from '../ShareSheet';
import { useDetectScroll } from '@/hooks/useDetectScroll';
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

  return (
    <>
      <Header
        name={isScrolled ? name : ''}
        className={isScrolled ? '' : 'bg-opacity-0 invert filter'}
        onBackClick={() => router.push('/')}
        rightIcons={[
          {
            src: '/assets/icons/28/Bookmark.svg',
            alt: 'Bookmark',
            width: 28,
            height: 28,
            onClick: () => console.log('북마크 클릭'),
          },
          {
            src: '/assets/icons/28/Share.svg',
            alt: 'Share',
            width: 28,
            height: 28,
            onClick: () => setIsShareSheetOpen(true),
          },
        ]}
      />
      <ShareSheet isOpen={isShareSheetOpen} onClose={() => setIsShareSheetOpen(false)} />
    </>
  );
}
