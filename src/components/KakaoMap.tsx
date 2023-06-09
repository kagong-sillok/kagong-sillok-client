import { DEFAULT_COORDINATES } from '@/constants/map';
import useGeoLocation from '@/hooks/useGeolocation';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import type { Coordinates } from '@/types/coordinates';
import type { PlaceType } from '@/types/place';

interface KakaoMapProps {
  className?: string;
  customCoordinates?: Coordinates;
  places?: PlaceType[];
}

const KakaoMap = ({ className, customCoordinates, places }: KakaoMapProps) => {
  const { loaded, error, coordinates } = useGeoLocation();

  const center = customCoordinates ?? coordinates ?? DEFAULT_COORDINATES;

  if (!loaded) {
    // TODO: 로딩 Lottie 추가
  }

  if (error) {
    return <div>에러</div>;
  }

  return (
    <>
      <Map center={center} className={className}>
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
