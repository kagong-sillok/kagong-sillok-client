'use client';
import { createContext, useContext } from 'react';
import { createStore, useStore } from 'zustand';

import type { Place } from '@/types/place';

interface SheetStore {
  isBottomSheetUp: boolean;
  selectedPlaceId: Place['id'] | null;
  setIsBottomSheetUp: (isBottomSheetUp: boolean) => void;
  setSelectedPlaceId: (selectedPlaceId: Place['id'] | null) => void;
}

const sheetStore = createStore<SheetStore>((set) => ({
  isBottomSheetUp: false,
  selectedPlaceId: null,
  setIsBottomSheetUp: (isBottomSheetUp) => set({ isBottomSheetUp }),
  setSelectedPlaceId: (selectedPlaceId) => set({ selectedPlaceId }),
}));

const sheetContext = createContext<typeof sheetStore | null>(null);

export const SheetProvider = ({ children }: { children: React.ReactNode }) => {
  return <sheetContext.Provider value={sheetStore}>{children}</sheetContext.Provider>;
};

export function useSheetContext<T>(selector?: (state: SheetStore) => T) {
  const store = useContext(sheetContext);
  if (!store) {
    throw new Error('Cannot find SheetProvider');
  }

  return useStore(store, (state: SheetStore) => state);
}
