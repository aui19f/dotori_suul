// useUserStore.ts
import { auth, db } from "@/fbase";
import { ILoginUser } from "@/interfaces/User";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { useLoadingStore } from "@/stores/loadingStore";

import * as Sentry from "@sentry/react";
interface UserState {
  user: ILoginUser | null;
  isAuthenticated: boolean | null; // 인증 상태
  setIsAuthenticated: (isAuthenticated: boolean) => void;

  login: (user: ILoginUser) => void; // 로그인 함수
  logout: () => void; // 로그아웃 함수
}

export const useLoginStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: null, // 인증 상태
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  login: (user: ILoginUser) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export const initAuthListener = () => {
  useLoadingStore.getState().setLoading(true);
  // 사용자 인증 상태가 변경될 때마다 호출
  let reulst = false;
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const { uid } = user;
      const docSnap = await getDoc(doc(db, "user", uid));
      if (docSnap.exists()) {
        const { email, nickname, role } = docSnap.data();
        useLoginStore.getState().login({ email, nickname, role });
      } else {
        Sentry.captureException("User Data, No such document!");
      }
    } else {
      useLoginStore.getState().setIsAuthenticated(false);
    }
    useLoadingStore.getState().setLoading(false);
    return reulst;
  });
};
