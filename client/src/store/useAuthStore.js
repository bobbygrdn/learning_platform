import { createStore } from 'zustand';

const useAuthStore = createStore((set) => ({
    token: null,
    setToken: (token) => set(() => ({ token })),
    allowRegistration: null,
    setAllowRegistration: (allowRegistration) => set(() => ({ allowRegistration })),
}));

export default useAuthStore;