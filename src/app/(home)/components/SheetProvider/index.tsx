'use client';
import { createContext, useContext } from 'react';
import { createStore, useStore } from 'zustand';

interface SheetStore {
  isBottomSheetUp: boolean;
  setIsBottomSheetUp: (isBottomSheetUp: boolean) => void;
}

const sheetStore = createStore<SheetStore>((set) => ({
  isBottomSheetUp: false,
  setIsBottomSheetUp: (isBottomSheetUp) => set({ isBottomSheetUp }),
}));

const sheetContext = createContext<typeof sheetStore | null>(null);

export const SheetProvider = ({ children }: { children: React.ReactNode }) => {
  return <sheetContext.Provider value={sheetStore}>{children}</sheetContext.Provider>;
};

export function useSheetContext<T>(selector: (state: SheetStore) => T): T {
  const store = useContext(sheetContext);
  if (!store) {
    throw new Error('Cannot find SheetProvider');
  }

  return useStore(store, selector);
}
