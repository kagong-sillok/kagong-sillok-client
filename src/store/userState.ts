import { create } from 'zustand';

import type { User } from '@/types/user';

interface UserStore {
  user: User;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    nickname: '',
    email: '',
    role: '',
  },
  setUser: (user) => set({ user }),
}));
