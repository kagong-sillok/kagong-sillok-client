import { useGetPlacesAround } from '@/apis/place';
import { useCoordinatesStore } from '@/store/coordinateState';
import { MapMarker } from 'react-kakao-maps-sdk';

export default function Markers() {
  const coordinates = useCoordinatesStore((state) => state.coordinates);

  const { data: placesAroundData } = useGetPlacesAround(coordinates);
  const { places } = placesAroundData;

  return (
    <>
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
    </>
  );
}
