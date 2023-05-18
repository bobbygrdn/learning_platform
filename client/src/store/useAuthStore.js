import { createStore } from 'zustand';

const useAuthStore = createStore((set) => ({
    token: null,
    setToken: (token) => set(() => ({ token })),
    allowRegistration: null,
    setAllowRegistration: (allowRegistration) => set(() => ({ allowRegistration })),
}));

console.log(useAuthStore);

export default useAuthStore;