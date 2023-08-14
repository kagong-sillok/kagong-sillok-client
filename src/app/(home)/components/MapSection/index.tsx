'use client';

import Markers from './Markers';
import { useSheetContext } from '../SheetProvider';
import { useGetPlacesAround } from '@/apis/place';
import { Loading } from '@/components';
import { DEFAULT_COORDINATES } from '@/constants/map';
import { useCoordinatesStore } from '@/store/useCoordinatesStore';
import { Suspense } from '@suspensive/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

export default function MapSection() {
  const [locationStatus, setLocationStatus] = useState({
    isLocationLoading: false,
    readyRefetch: false,
  });
  const { coordinates, setCoordinates } = useCoordinatesStore();
  const { refetch, isRefetching } = useGetPlacesAround(coordinates);
  const mapRef = useRef<kakao.maps.Map>(null);

  console.log(coordinates);

  const handleLocationClick = () => {
    setLocationStatus((prev) => ({
      ...prev,
      isLocationLoading: true,
    }));

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      mapRef?.current?.setCenter(new kakao.maps.LatLng(latitude, longitude));
      setCoordinates({
        ...coordinates,
        latitude,
        longitude,
      });

      setLocationStatus((prev) => ({
        ...prev,
        readyRefetch: true,
      }));
    });
  };

  useEffect(() => {
    if (locationStatus.readyRefetch && !isRefetching) {
      refetch();
      setLocationStatus({
        isLocationLoading: false,
        readyRefetch: false,
      });
    }
  }, [locationStatus.readyRefetch, isRefetching, refetch]);

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
        onDragEnd={(map) => {
          const center = map.getCenter();
          const latitude = center.getLat();
          const longitude = center.getLng();
          const latitudeBound = map.getBounds().getNorthEast().getLat() - latitude;
          const longitudeBound = map.getBounds().getNorthEast().getLng() - longitude;

          setCoordinates({
            latitude,
            longitude,
            latitudeBound,
            longitudeBound,
          });
        }}
      >
        <SearchButton onClick={() => refetch()} />
        <Suspense.CSROnly>
          <Markers />
        </Suspense.CSROnly>
        <LocationButton onClick={handleLocationClick} />
      </Map>
      {(locationStatus.isLocationLoading || isRefetching) && <Loading />}
    </section>
  );
}

interface SearchButtonProps {
  onClick: () => void;
}

function SearchButton({ onClick }: SearchButtonProps) {
  const isBottomSheetUp = useSheetContext((state) => state.isBottomSheetUp);

  return (
    <>
      {!isBottomSheetUp && (
        <button
          className="fixed left-1/2 top-[7.75rem] z-30 w-[138px] -translate-x-1/2 rounded-full bg-white py-2.5 text-body2 text-bk100 drop-shadow-md transition-colors active:bg-bk10"
          onClick={onClick}
        >
          이 지역에서 재검색
        </button>
      )}
    </>
  );
}

interface LocationButtonProps {
  onClick: () => void;
}

function LocationButton({ onClick }: LocationButtonProps) {
  return (
    <>
      <button
        className="absolute bottom-[81px] right-6 z-30 rounded-full bg-white p-3 drop-shadow-md transition-colors active:bg-bk20"
        onClick={onClick}
      >
        <Image src="/assets/Icons/16/Location.svg" width={16} height={16} alt="location" />
      </button>
    </>
  );
}
