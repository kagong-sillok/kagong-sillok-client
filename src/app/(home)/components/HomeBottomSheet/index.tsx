'use client';

import PlaceList from './PlaceList';
import { useSheetContext } from '../SheetProvider';
import { BottomSheet } from '@/components';
import { Suspense, useEffect, useRef, useState } from 'react';

import type { SheetRef } from 'react-modal-sheet';

export default function HomeBottomSheet() {
  const [snapPoints, setSnapPoints] = useState([-88, 65]);
  const [isServer, setIsServer] = useState(true);
  const { isBottomSheetUp, setIsBottomSheetUp, selectedPlaceId } = useSheetContext();

  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref?.current?.snapTo(i);

  useEffect(() => {
    // snapTo(!!selectedPlaceId ? 1 : snapPoints.length - 1);
    setSnapPoints(!!selectedPlaceId ? [-88, 115, 65] : [-88, 65]);
  }, [selectedPlaceId]);

  useEffect(() => {
    setIsServer(false);
  }, []);

  return (
    <>
      {selectedPlaceId === null && (
        <button
          className={`fixed left-1/2 z-[45] w-[84px] -translate-x-1/2 rounded-full bg-bk100 py-2.5 text-body2 text-white drop-shadow-md transition-colors active:bg-bk80
      ${isBottomSheetUp ? 'bottom-[16px]' : 'bottom-[81px]'}
      `}
          onClick={() => snapTo(isBottomSheetUp ? snapPoints.length - 1 : 0)}
        >
          {isBottomSheetUp ? '지도보기' : '목록보기'}
        </button>
      )}
      <BottomSheet
        ref={ref}
        isOpen={!isServer}
        snapPoints={snapPoints}
        disableDrag={selectedPlaceId !== null}
        onClose={() => {}}
        initialSnap={1}
        onSnap={(index) => setIsBottomSheetUp(index === 0)}
      >
        <Suspense
          fallback={<div className="text-center text-body2 text-bk40">잠시만 기다려주세요</div>}
        >
          <PlaceList />
        </Suspense>
      </BottomSheet>
    </>
  );
}
