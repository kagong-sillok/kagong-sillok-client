import { User } from '@/types/user';
import { create } from 'zustand';

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
