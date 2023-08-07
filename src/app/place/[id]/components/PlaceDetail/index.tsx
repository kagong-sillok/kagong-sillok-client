'use client';
import { GallerySection, InfoSection, PlaceTopNavigationBar, ReviewSection } from '..';
import { useGetPlace } from '@/apis/place';
import { Footer } from '@/app/place/components';
import { KakaoMap, Spacing } from '@/components';

interface PlaceDetailProps {
  placeId: number;
}

export default function PlaceDetail({ placeId }: PlaceDetailProps) {
  const { data: placeData } = useGetPlace(placeId);

  const { name, latitude, longitude, imageIds } = placeData;

  return (
    <>
      <PlaceTopNavigationBar name={name} />
      <div className="relative h-[219px]">
        <KakaoMap
          className="h-full"
          customCoordinates={{
            lat: latitude,
            lng: longitude,
          }}
          places={[placeData]}
        />
        <div className="absolute left-0 top-0 z-10 h-[219px] w-full bg-black bg-gradient-to-b from-bk100 to-white opacity-40"></div>
      </div>
      <div className="px-6">
        <Spacing size={30} />
        <InfoSection placeId={placeId} />
        <Spacing size={40} />
        <ReviewSection placeId={placeId} />
        <Spacing size={40} />
        <GallerySection imageIds={imageIds} />
        <Spacing size={100} />
      </div>
      <Footer />
    </>
  );
}
