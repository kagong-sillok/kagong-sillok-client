'use client';

import Markers from './Markers';
import SearchButton from './SearchButton';
import HomeSheet from '../HomeSheet';
import { useCoordinatesStore } from '@/store/useCoordinatesStore';
import { useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';

export default function MapSection() {
  const mapRef = useRef<kakao.maps.Map>(null);
  const { coordinates } = useCoordinatesStore();

  return (
    <section>
      <Map
        className="h-[100dvh] w-full min-w-[360px]"
        ref={mapRef}
        center={{
          lat: coordinates.latitude,
          lng: coordinates.longitude,
        }}
        isPanto={true}
        level={6}
      >
        <SearchButton />
        <Markers />
        <HomeSheet />
      </Map>
    </section>
  );
}
