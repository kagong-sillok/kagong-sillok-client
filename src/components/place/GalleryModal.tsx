import Header from '@/components/place/Header';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  images: { url: string; userId: number; userNickname: string }[];
  selectedImageUrl: string;
}

export default function GalleryModal({
  isOpen,
  onClose,
  name,
  images,
  selectedImageUrl,
}: GalleryModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(images.findIndex(({ url }) => url === selectedImageUrl));
  }, [selectedImageUrl, images]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 top-0 z-[51] flex w-full min-w-[360px] max-w-[448px] flex-col justify-center bg-black pb-6">
      <Header name={name} onBackClick={onClose} className="bg-opacity-0 invert filter" />
      <div className="absolute right-6 top-4">
        <span className="mr-1 text-body2 text-white">{currentImageIndex + 1}</span>
        <span className="text-caption text-bk50">/ {images.length}</span>
      </div>
      <div className="relative w-full before:block before:pb-[100%]">
        {images[currentImageIndex]?.url && (
          <Image
            src={images[currentImageIndex].url}
            alt={name}
            sizes="(max-width: 360px) 360px, (max-width: 448px) 448px, 100vw"
            fill
          />
        )}
      </div>
      <div className="absolute top-1/2 flex w-full -translate-y-1/2 items-center justify-between invert filter">
        <div
          className="flex h-9 w-9 cursor-pointer items-center justify-center bg-bk100 bg-opacity-40"
          onClick={() => {
            if (currentImageIndex === 0) return setCurrentImageIndex(images.length - 1);
            setCurrentImageIndex((prev) => prev - 1);
          }}
        >
          <Image src="/assets/Icons/16/Arrow-left.svg" alt="Arrow-left" width={28} height={28} />
        </div>
        <div
          className="flex h-9 w-9 cursor-pointer items-center justify-center bg-bk100 bg-opacity-40"
          onClick={() => {
            if (currentImageIndex === images.length - 1) return setCurrentImageIndex(0);
            setCurrentImageIndex((prev) => prev + 1);
          }}
        >
          <Image src="/assets/Icons/16/Arrow-right.svg" alt="Arrow-right" width={28} height={28} />
        </div>
      </div>
      <div className="absolute bottom-6 left-6 flex items-center">
        <div className="mr-[15px] h-10 w-10 shrink-0 rounded-full bg-bk20"></div>
        <p className="text-body2 text-white">{images[currentImageIndex]?.userNickname}</p>
      </div>
    </div>
  );
}
