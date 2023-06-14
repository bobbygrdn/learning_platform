import { createStore } from 'zustand';

const useAuthStore = createStore((set) => ({
    role: null,
    setRole: (role) => set(() => ({ role })),
    token: null,
    setToken: (token) => set(() => ({ token })),
    allowRegistration: false,
    setAllowRegistration: (allowRegistration) => set(() => ({ allowRegistration: allowRegistration })),
}));

export default useAuthStore;