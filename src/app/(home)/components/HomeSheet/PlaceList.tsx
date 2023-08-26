'use client';

import { useSheetContext } from '../SheetProvider';
import { useGetPlacesAround } from '@/apis/place';
import { Spacing } from '@/components';
import { useCoordinatesStore } from '@/store/useCoordinatesStore';
import { isPlaceOpen } from '@/utils/isPlaceOpen';
import { sortTagsByFrequency } from '@/utils/sortTagsByFrequency';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import type { Place } from '@/types/place';

export default function PlaceList() {
  const { selectedPlaceId, selectedTagId } = useSheetContext();
  const { coordinates } = useCoordinatesStore();
  const { data: placesAroundData } = useGetPlacesAround(coordinates);

  const places = placesAroundData?.places ?? [];

  const renderPlaces = !!selectedPlaceId
    ? places.filter((place) => place.id === selectedPlaceId)
    : !!selectedTagId
    ? places.filter((place) => place.reviewTags.some((tag) => tag.id === selectedTagId))
    : places;

  if (!renderPlaces.length)
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <Image src="/assets/icons/36/info.svg" alt="info" width={36} height={36} />
        <Spacing size={10} />
        <p className="text-caption text-bk60">주변에 카페가 없어요.</p>
      </div>
    );

  return (
    <ul>
      {renderPlaces.map((place) => (
        <PlaceItem key={place.id} place={place} />
      ))}
    </ul>
  );
}

interface PlaceItemProps {
  place: Place;
}

function PlaceItem({ place }: PlaceItemProps) {
  const { id, name, reviewTags, ratingAverage, images, businessHours } = place;

  const router = useRouter();

  const tags =
    reviewTags?.length > 0
      ? sortTagsByFrequency(reviewTags).slice(0, 3)
      : [{ tagContent: '조용한' }, { tagContent: '나만알고싶은' }, { tagContent: '노트북' }];

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
            {tags.map((tag) => (
              <span key={tag.tagContent} className="mr-1.5">
                #{tag.tagContent.replace(/ /g, '')}
              </span>
            ))}
          </div>
          <Spacing size={8} />
          <div className="flex gap-1.5 text-caption text-bk100">
            <Image
              src={`/assets/icons/40/emoji-rating${Math.round(ratingAverage ?? 3)}_on.svg`}
              height={16}
              width={16}
              alt="emoji"
            />
            <span className="text-bk30">•</span>
            <span>{isPlaceOpen(businessHours) ? '영업중' : '영업종료'}</span>
          </div>
        </div>
        <div className="relative h-16 w-16">
          <Image
            src={images[0]?.url || '/assets/icons/null.svg'}
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
