import { create } from 'zustand';

const useUIStore = create((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  closeSidebar: () => set({ sidebarOpen: false }),

  interventionOpen: false,
  openIntervention: () => set({ interventionOpen: true }),
  closeIntervention: () => set({ interventionOpen: false }),

  theme: 'dark',
  toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
}));

export default useUIStore;
