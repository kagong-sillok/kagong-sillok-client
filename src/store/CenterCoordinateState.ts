import { Coordinate } from '@/types/coordinate';
import { create } from 'zustand';

interface CenterCoordinate {
  coordinate: Coordinate;
  setCenterCoordinate: (newState: Coordinate) => void;
}

export const useCenterCoordinateStore = create<CenterCoordinate>((set) => ({
  coordinate: {
    latitude: 37.5642135,
    longitude: 127.0016985,
  },
  setCenterCoordinate: (newState) => set({ coordinate: newState }),
}));
