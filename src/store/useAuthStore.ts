import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";
import {AUTH_STORAGE_KEY, storageAdapter} from "@/service/local";

interface AuthStore {
  isLoggedIn: boolean;
  accessToken: string | null;
  setIsLoggedIn: (value: boolean) => void;
  setAccessToken: (value: string | null) => void;
}

const initialState = {
  isLoggedIn: false,
  accessToken: null,
};

const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      ...initialState,
      setIsLoggedIn: (value: boolean) => set({isLoggedIn: value}),
      setAccessToken: (value: string | null) => set({accessToken: value}),
    }),
    {
      name: AUTH_STORAGE_KEY,
      storage: createJSONStorage(() => storageAdapter),
      partialize: state => ({
        isLoggedIn: state.isLoggedIn,
        accessToken: state.accessToken,
      }),
    },
  ),
);

export default useAuthStore;
