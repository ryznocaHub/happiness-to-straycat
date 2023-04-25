import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: "",
  id: "",
  name: "",
  removeAuthStore: () => set({ token: "", id: "", name: "" }),
  setAuthStore: (value) =>
    set({
      token: value.headers.authorization,
      id: value.data.value.id,
      name: value.data.value.name,
    }),
}));
