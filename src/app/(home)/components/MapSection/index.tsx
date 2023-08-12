'use client';

import Markers from './Markers';
import HomeBottomSheet from '../HomeBottomSheet';
import { useSheetContext } from '../SheetProvider';
import { useGetPlacesAround } from '@/apis/place';
import { Loading } from '@/components';
import { DEFAULT_COORDINATES } from '@/constants/map';
import { useCenterCoordinateStore } from '@/store/CenterCoordinateState';
import { Suspense } from '@suspensive/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

export default function MapSection() {
  const { coordinates } = useCenterCoordinateStore();
  const { refetch } = useGetPlacesAround(coordinates);
  const mapRef = useRef<kakao.maps.Map>(null);

  useEffect(() => {
    refetch();
  }, [coordinates]);

  return (
    <section>
      <Map
        className="h-screen w-full min-w-[360px]"
        ref={mapRef}
        center={{
          lat: DEFAULT_COORDINATES.latitude,
          lng: DEFAULT_COORDINATES.longitude,
        }}
        isPanto={true}
        level={6}
      >
        <SearchCTAButton mapRef={mapRef} />
        <Suspense.CSROnly fallback={<></>}>
          <Markers />
        </Suspense.CSROnly>
        <LocationCTAButton mapRef={mapRef} />
      </Map>
      <HomeBottomSheet />
    </section>
  );
}

interface CTAButtonProps {
  mapRef?: React.MutableRefObject<kakao.maps.Map | null>;
}

function SearchCTAButton({ mapRef }: CTAButtonProps) {
  const isBottomSheetUp = useSheetContext((state) => state.isBottomSheetUp);
  const { setCenterCoordinates } = useCenterCoordinateStore();

  const handleSearchClick = () => {
    const map = mapRef?.current as kakao.maps.Map;
    const center = map.getCenter();
    const latitude = center.getLat();
    const longitude = center.getLng();
    const latitudeBound = map.getBounds().getNorthEast().getLat() - latitude;
    const longitudeBound = map.getBounds().getNorthEast().getLng() - longitude;

    setCenterCoordinates({
      latitude,
      longitude,
      latitudeBound,
      longitudeBound,
    });
  };

  return (
    <>
      {!isBottomSheetUp && (
        <button
          className="fixed left-1/2 top-[7.75rem] z-30 w-[138px] -translate-x-1/2 rounded-full bg-white py-2.5 text-body2 text-bk100 drop-shadow-md transition-colors active:bg-bk10"
          onClick={handleSearchClick}
        >
          이 지역에서 재검색
        </button>
      )}
    </>
  );
}

function LocationCTAButton({ mapRef }: CTAButtonProps) {
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const { setCenterCoordinates } = useCenterCoordinateStore();

  const handleLocationClick = () => {
    setIsLocationLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      mapRef?.current?.setCenter(new kakao.maps.LatLng(latitude, longitude));

      const map = mapRef?.current as kakao.maps.Map;
      const latitudeBound = map.getBounds().getNorthEast().getLat() - latitude;
      const longitudeBound = map.getBounds().getNorthEast().getLng() - longitude;

      setCenterCoordinates({
        latitude,
        longitude,
        latitudeBound,
        longitudeBound,
      });

      setIsLocationLoading(false);
    });
  };

  return (
    <>
      <button
        className="absolute bottom-[81px] right-6 z-30 rounded-full bg-white p-3 drop-shadow-md transition-colors active:bg-bk20"
        onClick={handleLocationClick}
      >
        <Image src="/assets/Icons/16/Location.svg" width={16} height={16} alt="location" />
      </button>
      {isLocationLoading && <Loading />}
    </>
  );
}
