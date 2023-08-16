'use client';

import { useGetReviewImages } from '@/apis/review';
import { Spacing } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

export default function GallerySection() {
  const pathname = usePathname();
  const params = useParams() as { id: string };
  const placeId = Number(params.id);

  const { data: reviewImagesData } = useGetReviewImages(placeId);

  if (reviewImagesData.totalImageCount === 0) return null;

  const { reviewImages, totalImageCount } = reviewImagesData;

  return (
    <section>
      <h5 className="text-sub1">갤러리</h5>
      <Spacing size={16} />
      <Link href={`${pathname}/gallery`} className="flex gap-1">
        {reviewImages.slice(0, 3).map((reviewImage, index) => (
          <div
            key={reviewImage.imageUrl + index}
            className="relative w-full cursor-pointer before:block before:pb-[100%]"
          >
            <Image
              src={reviewImage.imageUrl}
              alt="review-image"
              className="object-cover"
              sizes="(min-width: 640px) 33vw, 100vw"
              fill
            />
            {index === 2 && totalImageCount > 3 && (
              <>
                <div className="absolute left-0 top-0 flex w-full cursor-pointer items-center justify-center bg-black opacity-40 before:block before:pb-[100%]"></div>
                <p className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-sub1 text-white">
                  +{totalImageCount - 3}
                </p>
              </>
            )}
          </div>
        ))}
      </Link>
    </section>
  );
}
