import { create } from 'zustand';

interface Place {
  id: number;
  name: string;
  tags: string[];
  rating: number;
  latitude: number;
  longitude: number;
  isOpen: boolean;
}

interface Places {
  places: Place[];
  setCenterCoordinate: (newState: Place[]) => void;
}

export const usePlacesStore = create<Places>((set) => ({
  places: [
    {
      id: 1,
      name: '스타벅스 동대문공원점',
      tags: ['#조용한', '#나만알고싶은', '#노트북'],
      rating: 3,
      latitude: 37.5642105,
      longitude: 127.0016985,
      isOpen: true,
      createdAt: '',
      updatedAt: '',
    },
    {
      id: 2,
      name: '스타벅스 지축점',
      tags: ['#조용한', '#노트북'],
      rating: 1,
      latitude: 37.5042135,
      longitude: 127.0016985,
      isOpen: true,
      createdAt: '',
      updatedAt: '',
    },
    {
      id: 3,
      name: '투썸플레이스 구파발점',
      tags: ['#조용한', '#노트북'],
      rating: 5,
      latitude: 37.5642131,
      longitude: 127.0016985,
      isOpen: true,
      createdAt: '',
      updatedAt: '',
    },
    {
      id: 4,
      name: '휴가',
      tags: ['#조용한', '#노트북'],
      rating: 5,
      latitude: 37.5342135,
      longitude: 127.0016985,
      isOpen: true,
      createdAt: '',
      updatedAt: '',
    },
    {
      id: 5,
      name: '스타벅스 연신내점',
      tags: ['#조용한', '#노트북'],
      rating: 2,
      latitude: 37.5620135,
      longitude: 127.0016985,
      isOpen: true,
      createdAt: '',
      updatedAt: '',
    },
  ],
  setCenterCoordinate: (newState) => set({ places: newState }),
}));
