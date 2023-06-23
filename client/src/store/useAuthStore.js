import { createStore } from 'zustand';

const useAuthStore = createStore((set) => {

    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    return {
        role: role || null,
        setRole: (role) => set(() => ({ role })),
        token: token || null,
        setToken: (token) => set(() => ({ token })),
        allowRegistration: false,
        setAllowRegistration: (allowRegistration) => set(() => ({ allowRegistration: allowRegistration })),
    }
});

export default useAuthStore;