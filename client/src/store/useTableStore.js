import { createStore } from 'zustand';

const useTableStore = createStore((set) => ({
    currentPage: 1,
    modalOpen: false,
    currentEntity: null,
    action: null,
    currentContent: [],
    courses: [],
    lessons: [],
    quizzes: [],
    questions: [],
    currentTable: "Courses",
    searchTerm: "",
    setCurrentPage: (page) => set({ currentPage: page }),
    setModalOpen: (isOpen) => set({ modalOpen: isOpen }),
    setCurrentEntity: (entity) => set({ currentEntity: entity }),
    setAction: (action) => set({ action }),
    setCurrentContent: (content) =>
        set((state) => ({
            ...state,
            currentContent: content,
        })),
    setCourses: (courses) => set({ courses }),
    setLessons: (lessons) => set({ lessons }),
    setQuizzes: (quizzes) => set({ quizzes }),
    setQuestions: (questions) => set({ questions }),
    setCurrentTable: (table) =>
        set((state) => ({
            ...state,
            currentTable: table,
        })),
    setSearchTerm: (searchTerm) => set({ searchTerm })
}));

export default useTableStore;