import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  login: (email) =>
    set({
      user: { name: email.split('@')[0] || 'Trader', email },
      isAuthenticated: true,
    }),
  signup: (name, email) => set({ user: { name, email }, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useAuthStore;
