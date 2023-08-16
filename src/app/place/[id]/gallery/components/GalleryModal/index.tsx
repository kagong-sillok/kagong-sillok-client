'use client';
import { useGetPlace } from '@/apis/place';
import { useGetReviewImages } from '@/apis/review';
import { TopNavigationBar } from '@/components';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedImageUrl: string;
}

export default function GalleryModal({ isOpen, onClose, selectedImageUrl }: GalleryModalProps) {
  const params = useParams() as { id: string };
  const placeId = Number(params.id);

  const { data: placeData } = useGetPlace(placeId);
  const { data: reviewImagesData } = useGetReviewImages(placeId);

  const { name } = placeData;
  const { reviewImages, totalImageCount } = reviewImagesData;

  const [currentImageIndex, setCurrentImageIndex] = useState(
    reviewImages.findIndex(({ imageUrl }) => imageUrl === selectedImageUrl)
  );

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 top-0 z-[51] flex w-full min-w-[360px] max-w-[448px] flex-col justify-center bg-black pb-6">
      <TopNavigationBar
        title={name}
        onBackClick={onClose}
        rightNode={
          <div>
            <span className="mr-1 text-body2">{currentImageIndex + 1}</span>
            <span className="text-caption text-bk50">/ {totalImageCount}</span>
          </div>
        }
        className="bg-opacity-0 invert filter"
      />
      <div className="relative w-full before:block before:pb-[100%]">
        <Image
          src={reviewImages[currentImageIndex].imageUrl}
          alt={name}
          sizes="(max-width: 360px) 360px, (max-width: 448px) 448px, 100vw"
          fill
        />
      </div>
      <div className="absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between invert filter">
        <div
          className="flex h-9 w-9 cursor-pointer items-center justify-center bg-bk100 bg-opacity-40"
          onClick={() => {
            if (currentImageIndex === 0) return setCurrentImageIndex(totalImageCount - 1);
            setCurrentImageIndex((prev) => prev - 1);
          }}
        >
          <Image src="/assets/Icons/16/Arrow-left.svg" alt="Arrow-left" width={28} height={28} />
        </div>
        <div
          className="flex h-9 w-9 cursor-pointer items-center justify-center bg-bk100 bg-opacity-40"
          onClick={() => {
            if (currentImageIndex === totalImageCount - 1) return setCurrentImageIndex(0);
            setCurrentImageIndex((prev) => prev + 1);
          }}
        >
          <Image src="/assets/Icons/16/Arrow-right.svg" alt="Arrow-right" width={28} height={28} />
        </div>
      </div>
      <div className="absolute bottom-6 left-6 flex items-center">
        <div className="mr-[15px] h-10 w-10 shrink-0 rounded-full bg-bk20">
          <Image
            src={reviewImages[currentImageIndex].memberProfileUrl}
            alt="member"
            layout="fill"
          />
        </div>
        <p className="text-body2 text-white">{reviewImages[currentImageIndex].memberName}</p>
      </div>
    </div>
  );
}
