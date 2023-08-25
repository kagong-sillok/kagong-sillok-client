'use client';

import Markers from './Markers';
import SearchButton from './SearchButton';
import HomeSheet from '../HomeSheet';
import { useGetPlacesAround } from '@/apis/place';
import { Loading } from '@/components';
import { DEFAULT_COORDINATES } from '@/constants/map';
import { useCoordinatesStore } from '@/store/useCoordinatesStore';
import { Suspense } from '@suspensive/react';
import { useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';

export default function MapSection() {
  const { coordinates, setCoordinates } = useCoordinatesStore();
  const { refetch, isRefetching } = useGetPlacesAround(coordinates);
  const mapRef = useRef<kakao.maps.Map>(null);

  return (
    <section>
      <Map
        className="h-[100dvh] w-full min-w-[360px]"
        ref={mapRef}
        center={{
          lat: DEFAULT_COORDINATES.latitude,
          lng: DEFAULT_COORDINATES.longitude,
        }}
        isPanto={true}
        level={6}
        maxLevel={8}
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

        <HomeSheet />
      </Map>
      {isRefetching && <Loading />}
    </section>
  );
}
