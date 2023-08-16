'use client';
import GalleryModal from '../GalleryModal';
import { useGetReviewImages } from '@/apis/review';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function GalleryDetail() {
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const params = useParams() as { id: string };
  const placeId = Number(params.id);

  const { data: reviewImagesData } = useGetReviewImages(placeId);

  const { reviewImages, totalImageCount } = reviewImagesData;

  console.log(selectedImageUrl);

  return (
    <div className="grid grid-cols-3 gap-1">
      {reviewImages.map((reviewImage, index) => (
        <div
          key={reviewImage.imageUrl + index}
          className="relative w-full cursor-pointer before:block before:pb-[100%]"
          onClick={() => {
            setSelectedImageUrl(reviewImage.imageUrl);
          }}
        >
          <Image
            src={reviewImage.imageUrl}
            alt="이미지"
            className="object-cover"
            sizes="(min-width: 640px) 33vw, 100vw"
            fill
          />
        </div>
      ))}
      <GalleryModal
        isOpen={!!selectedImageUrl}
        onClose={() => setSelectedImageUrl('')}
        reviewImages={reviewImages}
        totalImageCount={totalImageCount}
        selectedImageUrl={selectedImageUrl}
      />
    </div>
  );
}
