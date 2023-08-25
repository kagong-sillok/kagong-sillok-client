'use client';

import { useGetPlacesAround } from '@/apis/place';
import { usePlaceRecords } from '@/apis/record';
import { useGetUserInfo } from '@/apis/user';
import { KakaoMap } from '@/components';

function Map() {
  const { data: userInfoData } = useGetUserInfo({});
  const { data: placeData } = usePlaceRecords(userInfoData?.id || -1);
  const mainCoordinates = placeData?.places.length
    ? {
        lat: placeData?.places[0].latitude,
        lng: placeData?.places[0].longitude,
      }
    : undefined;

  return (
    <KakaoMap
      places={placeData?.places}
      className="h-full w-full"
      customCoordinates={mainCoordinates}
    />
  );
}

export default Map;
