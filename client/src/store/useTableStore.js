import { createStore } from 'zustand';

const useTableStore = createStore((set) => ({
    currentPage: 1,
    editModalOpen: false,
    deleteModalOpen: false,
    createModalOpen: false,
    currentEntity: null,
    currentContent: [],
    courses: [],
    lessons: [],
    quizzes: [],
    questions: [],
    setCurrentPage: (page) => set({ currentPage: page }),
    setEditModalOpen: (isOpen) => set({ editModalOpen: isOpen }),
    setDeleteModalOpen: (isOpen) => set({ deleteModalOpen: isOpen }),
    setCreateModalOpen: (isOpen) => set({ createModalOpen: isOpen }),
    setCurrentEntity: (entity) => set({ currentEntity: entity }),
    setcurrentContent: (content) => set({ currentContent: content }),
    setCourses: (courses) => set({ courses }),
    setLessons: (lessons) => set({ lessons }),
    setQuizzes: (quizzes) => set({ quizzes }),
    setQuestions: (questions) => set({ questions }),
}));

export default useTableStore;