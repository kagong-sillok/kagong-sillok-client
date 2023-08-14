'use client';

import PlaceList from './PlaceList';
import { useSheetContext } from '../SheetProvider';
import { BottomSheet } from '@/components';
import { Suspense, useEffect, useRef, useState } from 'react';

import type { SheetRef } from 'react-modal-sheet';

export const snapPoints = [-88, 65];

export default function HomeBottomSheet() {
  const [isServer, setIsServer] = useState(true);
  const { isBottomSheetUp, setIsBottomSheetUp } = useSheetContext((state) => state);

  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);

  const handleSheetButtonClick = () => {
    if (isBottomSheetUp) {
      snapTo(snapPoints.length - 1);
      setIsBottomSheetUp(false);
    } else {
      snapTo(0);
      setIsBottomSheetUp(true);
    }
  };

  useEffect(() => {
    setIsServer(false);
  }, []);

  return (
    <>
      <button
        className={`fixed left-1/2 z-[45] w-[84px] -translate-x-1/2 rounded-full bg-bk100 py-2.5 text-body2 text-white drop-shadow-md transition-colors active:bg-bk80
        ${isBottomSheetUp ? 'bottom-[16px]' : 'bottom-[81px]'}
        `}
        onClick={handleSheetButtonClick}
      >
        {isBottomSheetUp ? '지도보기' : '목록보기'}
      </button>
      <BottomSheet
        ref={ref}
        isOpen={!isServer}
        snapPoints={snapPoints}
        onClose={() => {}}
        initialSnap={snapPoints.length - 1}
        onSnap={(index) => {
          if (index === snapPoints.length - 1) {
            setIsBottomSheetUp(false);
          } else {
            setIsBottomSheetUp(true);
          }
        }}
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
