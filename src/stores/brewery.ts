import { IBrewery } from "./../interfaces/Brewery";
import { create } from "zustand";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/fbase";

interface IBreweryDataState {
  data: IBrewery[];
  isLoading: boolean;
  error: string | null;
  fetchData: (docName: string, sido?: string) => Promise<void>;
}

const useBreweryDataStore = create<IBreweryDataState>((set) => ({
  data: [],
  isLoading: false,
  error: null,
  fetchData: async (docName, sido) => {
    set({ isLoading: true, error: null }); // 데이터 로딩 시작

    try {
      let data: IBrewery[] = []; // 빈 배열로 초기화하고 타입을 명시합니다.
      const querySnapshot = sido
        ? await getDocs(
            query(collection(db, docName), where("sido", "==", sido))
          )
        : await getDocs(collection(db, docName));

      querySnapshot.forEach((doc) => {
        console.log("doc.id", doc.id, doc.data());
        data.push({ id: doc.id, ...doc.data() });
      });
      set({ data, isLoading: false }); // 데이터를 상태에 저장
    } catch (error: any) {
      set({ error: error.message, isLoading: false }); // 에러 상태 업데이트
    }
  },
}));

export default useBreweryDataStore;
