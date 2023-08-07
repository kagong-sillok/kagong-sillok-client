'use client';

import { GalleryModal, GalleryTopNavigationBar } from './components';
import { useGetImages } from '@/apis/image';
import { useGetPlace } from '@/apis/place';
import { useGetReviews } from '@/apis/review';
import { Footer } from '@/app/place/components';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
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

  useEffect(() => {
    if (!reviewsData) return;

    reviewsData.reviews.forEach(({ imageIds }) => {
      setImageIds((prev) => [...prev, ...imageIds]);
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
      <GalleryTopNavigationBar placeId={placeId} name={placeData?.name ?? ''} />
      <div className="grid grid-cols-3 gap-1">
        {galleryImages.map(({ url }, index) => (
          <div
            key={index}
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
      <Footer />
      <GalleryModal
        name={placeData.name}
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        images={galleryImages}
        selectedImageUrl={selectedImageUrl}
      />
    </>
  );
}
