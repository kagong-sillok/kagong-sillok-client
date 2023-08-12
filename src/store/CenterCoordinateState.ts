import { DEFAULT_COORDINATES } from '@/constants/map';
import { create } from 'zustand';

import type { PlacesAround } from '@/types/place';

interface CenterCoordinates {
  coordinates: PlacesAround;
  setCenterCoordinates: (newState: PlacesAround) => void;
}

export const useCenterCoordinateStore = create<CenterCoordinates>((set) => ({
  coordinates: DEFAULT_COORDINATES,
  setCenterCoordinates: (newState) => set(() => ({ coordinates: newState })),
}));
