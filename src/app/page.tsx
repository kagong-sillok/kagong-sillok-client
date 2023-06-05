'use client';

import BottomSheet from '@/components/common/BottomSheet';
import Nav from '@/components/home/Nav';
import PlaceItem from '@/components/home/PlaceItem';
import KakaoMap from '@/components/KakaoMap';
import { usePlacesStore } from '@/store/PlacesState';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { type SheetRef } from 'react-modal-sheet';

export default function Home() {
  const ref = useRef<SheetRef>();
  const [isListClicked, setIsListClicked] = useState(false);
  const [maxSnap, setMaxSnap] = useState(0);
  const [isServer, setIsServer] = useState(false);
  const { places } = usePlacesStore();

  useEffect(() => {
    setIsServer(true);
    setMaxSnap(-88);
  }, []);

  const snapPoints = [
    maxSnap,
    500,
    475,
    450,
    425,
    400,
    375,
    350,
    325,
    300,
    275,
    250,
    225,
    200,
    170,
    140,
    125,
    100,
    65,
  ];

  const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <>
      <Nav isListClicked={isListClicked} />
      <button className="fixed left-[calc(50%-69px)] top-[7.75rem] z-50 w-[138px] rounded-full bg-white py-2.5 text-body2 text-bk100 drop-shadow-md transition-colors active:bg-bk10">
        이 지역에서 재검색
      </button>
      <button
        className="fixed bottom-[81px] left-[calc(50%-42px)] z-30 w-[84px] rounded-full bg-bk100 py-2.5 text-body2 text-white drop-shadow-md transition-colors active:bg-bk80"
        onClick={() => {
          snapTo(0);
          setIsListClicked(true);
        }}
      >
        목록보기
      </button>
      <button className="fixed bottom-[81px] right-6 z-30 rounded-full bg-white p-3 drop-shadow-md transition-colors active:bg-bk20">
        <Image src="/assets/Icons/16/Location.svg" width={16} height={16} alt="location" />
      </button>
      <KakaoMap />
      {isServer && (
        <BottomSheet
          ref={ref}
          isOpen={true}
          snapPoints={snapPoints}
          onClose={() => {
            return;
          }}
          initialSnap={snapPoints.length - 1}
        >
          <ul>
            {places.map((place) => (
              <PlaceItem
                key={place.id}
                id={place.id}
                name={place.name}
                tags={place.tags}
                rating={place.rating}
                latitude={place.latitude}
                longitude={place.longitude}
                isOpen={place.isOpen}
                snapTo={snapTo}
              />
            ))}
          </ul>
        </BottomSheet>
      )}
    </>
  );
}
