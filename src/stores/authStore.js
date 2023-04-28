import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: "",
  id: "",
  name: "Fikri Halim Ch",
  removeAuthStore: () => set({ token: "", id: "", name: "" }),
  setAuthStore: (value) =>
    set({
      token: value.data.access_token,
      id: value.data.value.id,
      name: value.data.value.name,
    }),
}));
