// useUserStore.ts
import { create } from "zustand";

interface UserState {
  user: { email: string; role: string } | null;
  setUser: (user: { email: string; role: string }) => void;
}

export const loginStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
