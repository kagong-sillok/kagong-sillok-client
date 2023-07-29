import { create } from 'zustand';

interface CenterCoordinates {
  coordinates: Coordinates;
  setCenterCoordinates: (newState: Coordinates) => void;
}

export const useCenterCoordinateStore = create<CenterCoordinates>((set) => ({
  coordinates: {
    lat: 37.5642135,
    lng: 127.0016985,
  },
  setCenterCoordinates: (newState) => set({ coordinates: newState }),
}));
