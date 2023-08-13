import { DEFAULT_COORDINATES } from '@/constants/map';
import { create } from 'zustand';

import type { Coordinates } from '@/types/place';

interface CoordinatesStore {
  coordinates: Coordinates;
  setCoordinates: (coordinates: Coordinates) => void;
}

export const useCoordinatesStore = create<CoordinatesStore>((set) => ({
  coordinates: DEFAULT_COORDINATES,
  setCoordinates: (coordinates) => set(() => ({ coordinates })),
}));
