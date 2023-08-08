'use client';
import { useGetImages } from '@/apis/image';
import { Spacing } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { Place } from '@/types/place';

interface GallerySectionProps {
  imageIds: Place['imageIds']; // TODO: Gallery api 추가되면 수정
}

export default function GallerySection({ imageIds }: GallerySectionProps) {
  const pathname = usePathname();

  const { data: imagesData } = useGetImages(imageIds);

  return (
    <section>
      <h5 className="text-sub1">갤러리</h5>
      <Spacing size={16} />
      <Link href={`${pathname}/gallery`} className="flex gap-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={imagesData?.images[index]?.id || index}
            className="relative w-full cursor-pointer before:block before:pb-[100%]"
          >
            {imagesData?.images[index] && (
              <Image
                src={imagesData?.images[index]?.url}
                alt="review-image"
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
                fill
              />
              // {
              //   // TODO: 이미지 총 개수 - 3 / 총 개수를 현재 받고 있지 않아서 받게되면 수정
              //   index === 2 && imagesData?.images.length > 3 && (
              //     <>
              //       <div className="absolute left-0 top-0 flex w-full cursor-pointer items-center justify-center bg-black opacity-40 before:block before:pb-[100%]"></div>
              //       <p className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-sub1 text-white">
              //         +{imagesData?.images.length - 3}
              //       </p>
              //     </>
              //   )
              // }
            )}
          </div>
        ))}
      </Link>
    </section>
  );
}
