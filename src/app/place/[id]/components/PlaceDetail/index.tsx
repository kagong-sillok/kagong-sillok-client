'use client';
import { GallerySection, InfoSection, PlaceTopNavigationBar, ReviewSection } from '..';
import { useGetPlaceWithTags } from '@/apis/place';
import { Footer } from '@/app/place/components';
import { KakaoMap, Spacing } from '@/components';
import { useNumberParams } from '@/hooks/useNumberParams';

export default function PlaceDetail() {
  const { id: placeId } = useNumberParams<['id']>();
  const { data: placeData } = useGetPlaceWithTags(placeId);

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
      <div className="px-6">
        <Spacing size={30} />
        <InfoSection {...placeData} />
        <Spacing size={40} />
        <ReviewSection />
        <Spacing size={40} />
        <GallerySection />
        <Spacing size={100} />
      </div>
      <Footer />
    </>
  );
}
