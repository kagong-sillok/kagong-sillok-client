'use client';
import { useGetImages } from '@/apis/image';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { Place } from '@/types/place';

interface GallerySectionProps {
  imageIds: Place['imageIds'];
}

export default function GallerySection({ imageIds }: GallerySectionProps) {
  const pathname = usePathname();

  const { data: imagesData } = useGetImages(imageIds || []); // TODO: 장소 이미지 페이징 api 나오면 수정

  return (
    <section>
      <h5 className="mb-4 text-sub1">갤러리</h5>
      <Link href={`${pathname}/gallery`} className="flex gap-1 pb-[100px]">
        {imagesData?.images.slice(0, 3).map(({ url }, index) => (
          <div key={url} className="relative w-full cursor-pointer before:block before:pb-[100%]">
            <Image
              src={url}
              alt="review-image"
              className="object-cover"
              sizes="(min-width: 640px) 33vw, 100vw"
              fill
            />
            {
              // TODO: 이미지 총 개수 - 3 / 총 개수를 현재 받고 있지 않아서 받게되면 수정
              index === 2 && imagesData?.images.length > 3 && (
                <>
                  <div className="absolute left-0 top-0 flex w-full cursor-pointer items-center justify-center bg-black opacity-40 before:block before:pb-[100%]"></div>
                  <p className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-sub1 text-white">
                    +{imagesData?.images.length - 3}
                  </p>
                </>
              )
            }
          </div>
        ))}
      </Link>
    </section>
  );
}
