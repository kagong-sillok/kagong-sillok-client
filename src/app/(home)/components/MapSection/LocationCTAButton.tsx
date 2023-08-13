import { Loading } from '@/components';
import { useCoordinatesStore } from '@/store/useCoordinatesStore';
import Image from 'next/image';
import { useState } from 'react';

interface LocationCTAButtonProps {
  mapRef?: React.MutableRefObject<kakao.maps.Map | null>;
}

export default function LocationCTAButton({ mapRef }: LocationCTAButtonProps) {
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const { setCoordinates: setCenterCoordinates } = useCoordinatesStore();

  const handleLocationClick = () => {
    setIsLocationLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      mapRef?.current?.setCenter(new kakao.maps.LatLng(latitude, longitude));

      const map = mapRef?.current as kakao.maps.Map;
      const latitudeBound = map.getBounds().getNorthEast().getLat() - latitude;
      const longitudeBound = map.getBounds().getNorthEast().getLng() - longitude;

      setCenterCoordinates({
        latitude,
        longitude,
        latitudeBound,
        longitudeBound,
      });

      setIsLocationLoading(false);
    });
  };

  return (
    <>
      <button
        className="absolute bottom-[81px] right-6 z-30 rounded-full bg-white p-3 drop-shadow-md transition-colors active:bg-bk20"
        onClick={handleLocationClick}
      >
        <Image src="/assets/Icons/16/Location.svg" width={16} height={16} alt="location" />
      </button>
      {isLocationLoading && <Loading />}
    </>
  );
}
