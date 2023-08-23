import { useGetPlacesAround } from '@/apis/place';
import { Loading } from '@/components';
import { useCoordinatesStore } from '@/store/useCoordinatesStore';
import cn from '@/utils/cn';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMap } from 'react-kakao-maps-sdk';

export default function LocationButton() {
  const [locationStatus, setLocationStatus] = useState({
    isLocationLoading: false,
    readyRefetch: false,
  });
  const { coordinates, setCoordinates } = useCoordinatesStore();
  const { refetch, isRefetching } = useGetPlacesAround(coordinates);
  const map = useMap();

  const handleLocationClick = () => {
    setLocationStatus((prev) => ({
      ...prev,
      isLocationLoading: true,
    }));

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      map.setCenter(new kakao.maps.LatLng(latitude, longitude));
      setCoordinates({
        ...coordinates,
        latitude,
        longitude,
      });

      setLocationStatus((prev) => ({
        ...prev,
        readyRefetch: true,
      }));
    });
  };

  useEffect(() => {
    if (locationStatus.readyRefetch && !isRefetching) {
      refetch();
      setLocationStatus({
        isLocationLoading: false,
        readyRefetch: false,
      });
    }
  }, [locationStatus.readyRefetch, isRefetching, refetch]);

  return (
    <>
      <button
        className={cn(
          'absolute -top-[72px] right-6 z-30 rounded-full bg-white p-3 drop-shadow-md transition-colors disabled:opacity-50',
          {
            'active:bg-bk20': !locationStatus.isLocationLoading,
            'opacity-50': locationStatus.isLocationLoading,
          }
        )}
        onClick={handleLocationClick}
        disabled={locationStatus.isLocationLoading}
      >
        <Image src="/assets/icons/16/Location.svg" width={16} height={16} alt="location" />
      </button>
    </>
  );
}
