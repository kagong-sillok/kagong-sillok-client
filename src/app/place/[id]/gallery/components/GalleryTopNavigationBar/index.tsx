'use client';
import { ShareSheet } from '@/app/place/components';
import { TopNavigationBar } from '@/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface GalleryTopNavigationBarProps {
  placeId: number;
  name: string;
}

export default function GalleryTopNavigationBar({ placeId, name }: GalleryTopNavigationBarProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <TopNavigationBar
        title={name}
        onBackClick={() => router.push(`/place/${placeId}`)}
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
              onClick={() => setIsShareModalOpen(true)}
              className="cursor-pointer"
            />
          </>
        }
      />
      <ShareSheet isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
    </>
  );
}
