'use client';
import GallerySection from '../GallerySection';
import InfoSection from '../InfoSection';
import ReviewSection from '../ReviewSection';
import { useGetPlace } from '@/apis/place';
import { Footer, PlaceTopNavigationBar } from '@/app/place/components';
import { KakaoMap } from '@/components';

interface PlaceDetailProps {
  placeId: number;
}

export default function PlaceDetail({ placeId }: PlaceDetailProps) {
  const { data: placeData } = useGetPlace(placeId);

  return (
    <>
      <PlaceTopNavigationBar name={placeData.name} />
      <div className="relative h-[219px]">
        <KakaoMap
          className="h-full"
          customCoordinates={{
            lat: placeData.latitude,
            lng: placeData.longitude,
          }}
          places={[placeData]}
        />
        <div className="absolute left-0 top-0 z-10 h-[219px] w-full bg-black bg-gradient-to-b from-bk100 to-white opacity-40"></div>
      </div>
      <div className="px-6 pt-[30px]">
        <InfoSection placeData={placeData} />
        <div className="mt-10" />
        <ReviewSection placeId={placeId} />
        <GallerySection imageIds={placeData.imageIds} />
      </div>
      <Footer />
    </>
  );
}
