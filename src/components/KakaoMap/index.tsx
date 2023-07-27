'use client';

import { DEFAULT_COORDINATES } from '@/constants/map';
// import useGeoLocation from '@/hooks/useGeolocation';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import type { Place } from '@/apis/place';
import type { Coordinates } from '@/types/coordinates';

interface KakaoMapProps {
  className?: string;
  customCoordinates?: Coordinates;
  places?: Place[];
}

const KakaoMap = ({ className, customCoordinates, places }: KakaoMapProps) => {
  return (
    <>
      <Map center={customCoordinates ?? DEFAULT_COORDINATES} className={className}>
        {places?.map((place) => (
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
