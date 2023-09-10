import { createStore } from 'zustand';

const useAuthStore = createStore((set) => {

    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const experience = localStorage.getItem('experience');
    const characterAge = localStorage.getItem('characterAge');
    const title = localStorage.getItem('title');
    const mastery = localStorage.getItem('mastery');
    const currentCourse = localStorage.getItem('currentCourse')
    const completeLesson = localStorage.getItem('completeLesson');

    return {
        role: role || null,
        setRole: (role) => set(() => ({ role })),
        token: token || null,
        setToken: (token) => set(() => ({ token })),
        experience: experience || null,
        setExperience: (experience) => set(() => ({ experience })),
        characterAge: characterAge || null,
        setCharacterAge: (characterAge) => set(() => ({ characterAge })),
        title: title || null,
        setTitle: (title) => set(() => ({ title })),
        mastery: mastery || null,
        setMastery: (mastery) => set(() => ({ mastery })),
        allowRegistration: false,
        setAllowRegistration: (allowRegistration) => set(() => ({ allowRegistration: allowRegistration })),
        myCourses: [],
        setMyCourses: (myCourses) => set({ myCourses }),
        currentCourse: currentCourse || null,
        setCurrentCourse: (currentCourse) => set({ currentCourse }),
        completeLesson: completeLesson || null,
        setCompleteLesson: (completeLesson) => set({ completeLesson })
    }
});

export default useAuthStore;