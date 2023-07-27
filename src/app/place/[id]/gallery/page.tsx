'use client';

import { GalleryModal } from './components';
import { Header, TimeLogSheet } from '../components';
import { useGetImages, useGetPlace, useGetReviews } from '@/apis/place';
import { Button } from '@/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const [isLogTimeSheetOpen, setIsLogTimeSheetOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [galleryImages, setGalleryImages] = useState<
    { url: string; userId: number; userNickname: string }[]
  >([]);
  const [imageIds, setImageIds] = useState<number[]>([]);

  const placeId = Number(params.id);

  const { data: placeData } = useGetPlace(placeId);
  const { data: reviewsData } = useGetReviews(placeId);
  const { data: imagesData } = useGetImages(imageIds);

  const router = useRouter();

  useEffect(() => {
    if (!reviewsData) return;

    reviewsData.pages.forEach(({ data }) => {
      data.reviews.forEach(({ imageIds }) => {
        setImageIds((prev) => [...prev, ...imageIds]);
      });
    });
  }, [reviewsData]);

  useEffect(() => {
    if (!imagesData) return;

    setGalleryImages((prev) => [
      ...prev,
      ...imagesData.images.map(({ url }) => ({ url, userId: 1, userNickname: 'test' })),
    ]);
  }, [imagesData]);

  return (
    <>
      <Header
        name={placeData?.name}
        onBackClick={() => router.push(`/place/${params.id}`)}
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
        {galleryImages.map(({ url }) => (
          <div
            key={url}
            className="relative w-full cursor-pointer before:block before:pb-[100%]"
            onClick={() => {
              setSelectedImageUrl(url);
              setIsGalleryModalOpen(true);
            }}
          >
            <Image
              src={url}
              alt="이미지"
              className="object-cover"
              sizes="(min-width: 640px) 33vw, 100vw"
              fill
            />
          </div>
        ))}
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
        name={placeData?.name ?? ''}
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        images={galleryImages ?? []}
        selectedImageUrl={selectedImageUrl}
      />
    </>
  );
}
