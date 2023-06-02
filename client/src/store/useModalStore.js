import { createStore } from 'zustand';

const useModalStore = createStore((set) => ({
    title: '',
    description: '',
    difficulty: '',
    timeNeeded: '',
    topics: '',
    content: '',
    setTitle: (title) => set({ title }),
    setDescription: (description) => set({ description }),
    setDifficulty: (difficulty) => set({ difficulty }),
    setTimeNeeded: (timeNeeded) => set({ timeNeeded }),
    setTopics: (topics) => set({ topics }),
    setContent: (content) => set({ content }),
}));

export default useModalStore;