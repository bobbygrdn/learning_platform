import { createStore } from 'zustand';

const useCredentialStore = createStore((set) => ({
    userName: '',
    password: '',
    userId: 0,
    keepLoggedIn: false,
    disabled: true,
    setUserName: (name) => set({ userName: name }),
    setPassword: (pass) => set({ password: pass }),
    setUserId: (id) => set({ userId: id }),
    setKeepLoggedIn: (keep) => set({ keepLoggedIn: keep }),
    setDisabled: (disable) => set({ disabled: disable }),
}));

export default useCredentialStore;