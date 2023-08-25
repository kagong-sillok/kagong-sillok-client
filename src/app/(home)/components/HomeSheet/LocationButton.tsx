import { useSheetContext } from '../SheetProvider';
import { useCoordinatesStore } from '@/store/useCoordinatesStore';
import cn from '@/utils/cn';
import Image from 'next/image';
import { useState } from 'react';
import { useMap } from 'react-kakao-maps-sdk';

export default function LocationButton() {
  const [isLoading, setIsLoading] = useState(false);
  const { coordinates, setCoordinates } = useCoordinatesStore();
  const { setSelectedPlaceId } = useSheetContext();
  const map = useMap();

  const handleLocationClick = () => {
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      map.setCenter(new kakao.maps.LatLng(latitude, longitude));
      setCoordinates({
        ...coordinates,
        latitude,
        longitude,
      });

      setSelectedPlaceId(null);
      setIsLoading(false);
    });
  };

  return (
    <>
      <button
        className={cn(
          'absolute -top-[72px] right-6 z-30 rounded-full bg-white p-3 drop-shadow-md transition-colors disabled:opacity-50',
          {
            'active:bg-bk20': !isLoading,
            'opacity-50': isLoading,
          }
        )}
        onClick={handleLocationClick}
        disabled={isLoading}
      >
        <Image src="/assets/icons/16/Location.svg" width={16} height={16} alt="location" />
      </button>
    </>
  );
}
