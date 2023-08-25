'use client';

import LocationButton from './LocationButton';
import PlaceList from './PlaceList';
import SheetButton from './SheetButton';
import { useSheetContext } from '../SheetProvider';
import { BottomSheet } from '@/components';
import { useEffect, useRef, useState } from 'react';

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
    <BottomSheet
      ref={ref}
      isOpen={!isServer}
      snapPoints={snapPoints}
      onClose={() => {}}
      initialSnap={1}
      onSnap={(index) => setIsBottomSheetUp(index === 0)}
      disableDrag
    >
      <SheetButton onClick={() => snapTo(isBottomSheetUp ? snapPoints.length - 1 : 0)} />
      {!isBottomSheetUp && <LocationButton />}
      <PlaceList />
    </BottomSheet>
  );
}
