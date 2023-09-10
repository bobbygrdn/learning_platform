import { createStore } from 'zustand';

const useModalStore = createStore((set) => ({
    title: '',
    description: '',
    difficulty: '',
    timeNeeded: '',
    topics: '',
    content: '',
    options: '',
    answers: '',
    setTitle: (title) => set({ title }),
    setDescription: (description) => set({ description }),
    setDifficulty: (difficulty) => set({ difficulty }),
    setTimeNeeded: (timeNeeded) => set({ timeNeeded }),
    setTopics: (topics) => set({ topics }),
    setContent: (content) => set({ content }),
    setOptions: (options) => set({ options }),
    setAnswers: (answers) => set({ answers }),
    addContent: (newContent) => set((state) => ({ ...state, content: state.content + newContent })),
}));

export default useModalStore;