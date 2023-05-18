import { createStore } from 'zustand';

const useModalStore = createStore((set) => ({
    title: '',
    description: '',
    content: '',
    setTitle: (title) => set({ title }),
    setDescription: (description) => set({ description }),
    setContent: (content) => set({ content }),
}));

export default useModalStore;