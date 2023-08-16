'use client';
import { useGetPlace } from '@/apis/place';
import { ShareSheet } from '@/app/place/components';
import { TopNavigationBar } from '@/components';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function GalleryTopNavigationBar() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const params = useParams() as { id: string };
  const placeId = Number(params.id);
  const router = useRouter();

  const { data: placeData } = useGetPlace(placeId);

  const { name } = placeData;

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
