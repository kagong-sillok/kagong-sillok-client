/* eslint-disable @next/next/no-before-interactive-script-outside-document */
'use client';

import { DEFAULT_COORDINATES } from '@/constants/map';
import useGeoLocation from '@/hooks/useGeolocation';
import { usePlacesStore } from '@/store/PlacesState';
import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_API_KEY}&autoload=false`;

const KakaoMap = () => {
  const { loaded, error, coordinates } = useGeoLocation();
  const { places } = usePlacesStore();

  if (loaded) {
    <div>loading..</div>;
  }

  if (error) {
    <div>에러</div>;
  }

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={coordinates ? { lat: coordinates.lat, lng: coordinates.lng } : DEFAULT_COORDINATES}
        className="h-screen w-full min-w-[360px]"
      >
        {places.map((place) => (
          <MapMarker
            key={place.id}
            position={{
              lat: place.latitude,
              lng: place.longitude,
            }}
            image={{
              src: '/assets/Icons/marker.svg',
              size: {
                width: 36,
                height: 45,
              },
            }}
          />
        ))}
      </Map>
    </>
  );
};

export default KakaoMap;
