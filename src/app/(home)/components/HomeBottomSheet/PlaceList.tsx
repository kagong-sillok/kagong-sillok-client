'use client';

import { useGetImages } from '@/apis/image';
import { Spacing } from '@/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import type { Place } from '@/types/place';

interface PlaceListProps {
  places: Place[];
}

export default function PlaceList({ places }: PlaceListProps) {
  return (
    <ul>
      {places.map((place) => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </ul>
  );
}

interface PlaceItemProps {
  place: Place;
}

function PlaceItem({ place }: PlaceItemProps) {
  const { id, name, tags, rating, isOpen, imageIds } = place;

  const { data: imagesData } = useGetImages(imageIds);

  const router = useRouter();

  return (
    <li className="h-[115px] w-full">
      <div
        onClick={() => router.push(`/place/${id}`)}
        className="flex h-full cursor-pointer justify-between p-6"
      >
        <div className="flex flex-col">
          <p className="text-sub1">{name}</p>
          <Spacing size={2} />
          <div className="h-fit text-caption text-bk50">
            {tags?.map((tag) => (
              <span key={tag} className="mr-1.5">
                {tag}
              </span>
            ))}
          </div>
          <Spacing size={8} />
          <div className="flex gap-1.5 text-caption text-bk100">
            <Image
              src={`/assets/Icons/40/emoji-rating${Math.round(rating ?? 3)}_on.svg`}
              height={16}
              width={16}
              alt="emoji"
            />
            <span className="text-bk30">•</span>
            <span>80m</span>
            <span className="text-bk30">•</span>
            <span>{isOpen ? '영업중' : '영업종료'}</span>
          </div>
        </div>
        <div className="relative h-16 w-16">
          <Image
            src={imagesData?.images[0]?.url ?? '/assets/Icons/null.svg'}
            alt="thumbnail"
            className="object-cover"
            sizes="100%"
            fill
          />
        </div>
      </div>
    </li>
  );
}
