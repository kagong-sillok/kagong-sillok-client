'use client';

import { GallerySection, ReviewSection } from './components';
import InfoSection from './components/InfoSection';
import Footer from '../components/Footer';
import PlaceTopNavigationBar from '../components/PlaceTopNavigationBar';
import { useGetPlace } from '@/apis/place';
import { KakaoMap } from '@/components';

export default function Page({ params }: { params: { id: string } }) {
  const placeId = Number(params.id);

  const { data: placeData, isLoading, isError } = useGetPlace(placeId);

  if (isLoading) return null;
  if (isError) return null;

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
