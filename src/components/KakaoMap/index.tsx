'use client';

import { DEFAULT_COORDINATES } from '@/constants/map';
import { Map, MapMarker, type MapProps } from 'react-kakao-maps-sdk';

import type { Place } from '@/types/place';

interface KakaoMapProps {
  className?: string;
  customCoordinates?: MapProps['center'];
  places?: Place[];
}

const KakaoMap = ({ className, customCoordinates, places }: KakaoMapProps) => {
  return (
    <>
      <Map
        center={
          customCoordinates ?? {
            lat: DEFAULT_COORDINATES.latitude,
            lng: DEFAULT_COORDINATES.longitude,
          }
        }
        className={className}
      >
        {places?.map((place) => (
          <MapMarker
            key={place.id}
            position={{
              lat: place.latitude,
              lng: place.longitude,
            }}
            image={{
              src: '/assets/icons/marker.svg',
              size: {
                width: 72,
                height: 72,
              },
              options: {
                alt: 'marker',
                offset: {
                  x: 36,
                  y: 36,
                },
              },
            }}
          />
        ))}
      </Map>
    </>
  );
};

export default KakaoMap;
