import { createStore } from 'zustand';

const useCredentialStore = createStore((set) => {

    const userName = localStorage.getItem('username');
    const userId = localStorage.getItem('id');

    return {
        userName: userName || '',
        password: '',
        userId: userId || 0,
        keepLoggedIn: false,
        disabled: true,
        setUserName: (name) => set({ userName: name }),
        setPassword: (pass) => set({ password: pass }),
        setUserId: (id) => set({ userId: id }),
        setKeepLoggedIn: (keep) => set({ keepLoggedIn: keep }),
        setDisabled: (disable) => set({ disabled: disable }),
    }
});

export default useCredentialStore;