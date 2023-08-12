'use client';

import LocationCTAButton from './LocationCTAButton';
import Markers from './Markers';
import SearchCTAButton from './SearchCTAButton';
import { useGetPlacesAround } from '@/apis/place';
import { DEFAULT_COORDINATES } from '@/constants/map';
import { useCenterCoordinateStore } from '@/store/CenterCoordinateState';
import { Suspense } from '@suspensive/react';
import { useEffect, useRef } from 'react';
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
        <Suspense.CSROnly>
          <Markers />
        </Suspense.CSROnly>
        <SearchCTAButton mapRef={mapRef} />
        <LocationCTAButton mapRef={mapRef} />
      </Map>
    </section>
  );
}
