'use client';

import KakaoMap from '@/components/KakaoMap';
import { useGetPlacesAround } from '@/hooks/queries/place/useGetPlacesAround';

function Map() {
  const { data: placesAroundData } = useGetPlacesAround({
    latitude: 37.5665,
    longitude: 126.978,
    latitudeBound: 0.01,
    longitudeBound: 0.01,
  });

  return <KakaoMap places={placesAroundData?.places} className="h-full w-full" />;
}

export default Map;
