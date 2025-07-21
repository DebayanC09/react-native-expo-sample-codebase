import {MMKV} from "react-native-mmkv";

const storage = new MMKV();

export const AUTH_STORAGE_KEY = "auth-storage";

// Create MMKV storage adapter for Zustand
export const storageAdapter = {
  getItem: (name: string) => {
    const value = storage.getString(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: (name: string, value: any) => {
    storage.set(name, JSON.stringify(value));
  },
  removeItem: (name: string) => {
    storage.delete(name);
  },
};
