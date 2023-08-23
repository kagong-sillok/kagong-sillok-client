'use client';

import LocationButton from './LocationButton';
import PlaceList from './PlaceList';
import SheetButton from './SheetButton';
import { useSheetContext } from '../SheetProvider';
import { BottomSheet } from '@/components';
import { Suspense, useEffect, useRef, useState } from 'react';

import type { SheetRef } from 'react-modal-sheet';

export default function HomeSheet() {
  const [snapPoints, setSnapPoints] = useState([-88, 65]);
  const [isServer, setIsServer] = useState(true);
  const { isBottomSheetUp, setIsBottomSheetUp, selectedPlaceId } = useSheetContext();

  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref?.current?.snapTo(i);

  useEffect(() => {
    setSnapPoints(!!selectedPlaceId ? [-88, 115, 65] : [-88, 65]);
  }, [selectedPlaceId]);

  useEffect(() => {
    setIsServer(false);
  }, []);

  return (
    <>
      <SheetButton onClick={() => snapTo(isBottomSheetUp ? snapPoints.length - 1 : 0)} />
      <BottomSheet
        ref={ref}
        isOpen={!isServer}
        snapPoints={snapPoints}
        disableDrag={selectedPlaceId !== null}
        onClose={() => {}}
        initialSnap={1}
        onSnap={(index) => setIsBottomSheetUp(index === 0)}
      >
        {!isBottomSheetUp && <LocationButton />}
        <Suspense
          fallback={<div className="text-center text-body2 text-bk40">잠시만 기다려주세요</div>}
        >
          <PlaceList />
        </Suspense>
      </BottomSheet>
    </>
  );
}
