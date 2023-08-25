'use client';
import { useSheetContext } from '../SheetProvider';
import { useGetPlacesAround } from '@/apis/place';
import { useCoordinatesStore } from '@/store/useCoordinatesStore';
import cn from '@/utils/cn';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CustomOverlayMap, useMap } from 'react-kakao-maps-sdk';

import type { Place } from '@/types/place';

export default function Markers() {
  const { selectedPlaceId, setSelectedPlaceId } = useSheetContext();
  const coordinates = useCoordinatesStore((state) => state.coordinates);
  const map = useMap();

  const { data: placesAroundData } = useGetPlacesAround(coordinates);
  const { places } = placesAroundData;

  const handleMarkerClick = (
    placeId: Place['id'],
    latitude: Place['latitude'],
    longitude: Place['longitude']
  ) => {
    if (selectedPlaceId === placeId) {
      setSelectedPlaceId(null);
      return;
    }

    setSelectedPlaceId(placeId);
    map.panTo(new kakao.maps.LatLng(latitude, longitude));
  };

  return (
    <>
      {places.map((place) => (
        <CustomOverlayMap
          key={place.id}
          position={{
            lat: place.latitude,
            lng: place.longitude,
          }}
        >
          <motion.div
            className={cn('relative h-[72px] w-[72px]')}
            initial={{ scale: 0, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              onClick={() => handleMarkerClick(place.id, place.latitude, place.longitude)}
              draggable={false}
              src={`/assets/icons/marker.svg`}
              alt="marker"
              fill
            />
          </motion.div>
        </CustomOverlayMap>
      ))}
    </>
  );
}
