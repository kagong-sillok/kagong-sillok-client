'use client';

import Button from '@/components/common/Button';
import { Header, TimeLogSheet } from '@/components/place';
import GalleryModal from '@/components/place/GalleryModal';
import { useGetPlace } from '@/hooks/queries/place/useGetPlace';
import { useGetReviews } from '@/hooks/queries/place/useGetReviews';
import Image from 'next/image';
import { useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const [isLogTimeSheetOpen, setIsLogTimeSheetOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  const { data: place } = useGetPlace(params.id);
  const { data: reviews } = useGetReviews(params.id);

  const images = reviews?.data
    .map((review) =>
      review.images.map((image) => ({
        url: image.url,
        userId: review.userId,
        userNickname: review.userNickname,
      }))
    )
    .flat();

  return (
    <div className="h-full">
      <Header
        name={place?.data.name}
        rightIcons={[
          {
            src: '/assets/icons/28/Bookmark.svg',
            alt: 'Bookmark',
            width: 28,
            height: 28,
          },
          {
            src: '/assets/icons/28/Share.svg',
            alt: 'Share',
            width: 28,
            height: 28,
          },
        ]}
      />
      <div className="grid grid-cols-3 gap-1 pt-14">
        {reviews?.data.map((review) =>
          review.images.map((image) => (
            <div
              key={image.url}
              className="relative w-full cursor-pointer pb-[100%]"
              onClick={() => {
                setSelectedImageUrl(image.url);
                setIsGalleryModalOpen(true);
              }}
            >
              <Image
                src={image.url}
                alt="이미지"
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
                fill
              />
            </div>
          ))
        )}
      </div>
      <footer>
        <Button
          type="DEFAULT"
          className="fixed bottom-0 z-50 w-full min-w-[360px] max-w-[448px]"
          onClick={() => setIsLogTimeSheetOpen(true)}
        >
          카공 기록하기
        </Button>
      </footer>
      <TimeLogSheet isOpen={isLogTimeSheetOpen} onClose={() => setIsLogTimeSheetOpen(false)} />
      <GalleryModal
        name={place?.data.name ?? ''}
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        images={images ?? []}
        selectedImageUrl={selectedImageUrl}
      />
    </div>
  );
}
