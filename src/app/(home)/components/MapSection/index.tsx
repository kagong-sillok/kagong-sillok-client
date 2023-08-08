'use client';

import Loading from '@/app/loading';
import { KakaoMap } from '@/components';
import { Place } from '@/types/place';
import Image from 'next/image';
import { useState } from 'react';

interface MapSectionProps {
  places: Place[];
}

export default function MapSection({ places }: MapSectionProps) {
  const [isLocationLoading, setIsLocationLoading] = useState(false);

  const [currentCoordinates, setCurrentCoordinates] = useState<Coordinates>();

  const handleLocationClick = () => {
    setIsLocationLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentCoordinates({ lat: latitude, lng: longitude });
      setIsLocationLoading(false);
    });
  };

  return (
    <section>
      <KakaoMap
        className="h-screen w-full min-w-[360px]"
        customCoordinates={currentCoordinates}
        places={places}
      />
      <button
        className="absolute bottom-[81px] right-6 z-30 rounded-full bg-white p-3 drop-shadow-md transition-colors active:bg-bk20"
        onClick={handleLocationClick}
      >
        <Image src="/assets/Icons/16/Location.svg" width={16} height={16} alt="location" />
      </button>
      {isLocationLoading && <Loading />}
    </section>
  );
}
