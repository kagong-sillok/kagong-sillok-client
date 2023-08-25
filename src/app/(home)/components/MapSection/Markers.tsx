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
      {placesAroundData?.places.map((place) => {
        const isPlaceSelected = selectedPlaceId === place.id;
        return (
          <CustomOverlayMap
            key={place.id}
            position={{
              lat: place.latitude,
              lng: place.longitude,
            }}
            xAnchor={0.5}
            yAnchor={isPlaceSelected ? 0.5 : 1}
          >
            <motion.div
              className={cn('relative', {
                'h-[72px] w-[72px]': isPlaceSelected,
                'h-[19px] w-[19px]': !isPlaceSelected,
              })}
              initial={isPlaceSelected ? { scale: 0, y: 40 } : { scale: 0, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                onClick={() => handleMarkerClick(place.id, place.latitude, place.longitude)}
                draggable={false}
                src={`/assets/icons/${isPlaceSelected ? 'marker' : 'small_marker'}.svg`}
                alt="marker"
                fill
              />
            </motion.div>
          </CustomOverlayMap>
        );
      })}
    </>
  );
}
