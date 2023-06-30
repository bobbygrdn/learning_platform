import { createStore } from 'zustand';

const useAuthStore = createStore((set) => {

    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const experience = localStorage.getItem('experience');
    const learningStreak = localStorage.getItem('learningStreak');
    const title = localStorage.getItem('title');
    const mastery = localStorage.getItem('mastery');

    return {
        role: role || null,
        setRole: (role) => set(() => ({ role })),
        token: token || null,
        setToken: (token) => set(() => ({ token })),
        experience: experience || null,
        setExperience: (experience) => set(() => ({ experience })),
        learningStreak: learningStreak || null,
        setLearningStreak: (learningStreak) => set(() => ({ learningStreak })),
        title: title || null,
        setTitle: (title) => set(() => ({ title })),
        mastery: mastery || null,
        setMastery: (mastery) => set(() => ({ mastery })),
        allowRegistration: false,
        setAllowRegistration: (allowRegistration) => set(() => ({ allowRegistration: allowRegistration })),
    }
});

export default useAuthStore;