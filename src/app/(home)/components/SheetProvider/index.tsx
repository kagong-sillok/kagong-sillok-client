'use client';
import { createContext, useContext } from 'react';
import { createStore, useStore } from 'zustand';

interface SheetStore {
  isBottomSheetUp: boolean;
  selectedPlaceId: number | null;
  selectedTagId: number;
  setIsBottomSheetUp: (isBottomSheetUp: boolean) => void;
  setSelectedPlaceId: (selectedPlaceId: number | null) => void;
  setSelectedTagId: (selectedTagId: number) => void;
}

const sheetStore = createStore<SheetStore>((set) => ({
  isBottomSheetUp: false,
  selectedPlaceId: null,
  selectedTagId: 0,
  setIsBottomSheetUp: (isBottomSheetUp) => set({ isBottomSheetUp }),
  setSelectedPlaceId: (selectedPlaceId) => set({ selectedPlaceId }),
  setSelectedTagId: (selectedTagId) => set({ selectedTagId }),
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
