'use client';

import { Header, HomeBottomSheet, MapSection } from '..';
import { useGetPlacesAround } from '@/apis/place';
import { DEFAULT_COORDINATES } from '@/constants/map';
import { useState } from 'react';

export default function HomeDetail() {
  const [isBottomSheetUp, setIsBottomSheetUp] = useState(false);

  const { data: placesAroundData } = useGetPlacesAround(DEFAULT_COORDINATES);

  return (
    <main>
      <Header isBottomSheetUp={isBottomSheetUp} />
      <MapSection places={placesAroundData.places} />
      <HomeBottomSheet
        places={placesAroundData.places}
        isBottomSheetUp={isBottomSheetUp}
        setIsBottomSheetUp={setIsBottomSheetUp}
      />
    </main>
  );
}
