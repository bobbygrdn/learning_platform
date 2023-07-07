import { createStore } from "zustand";

const useWarriorStore = createStore((set) => ({
    characterSelection: null,
    genderSelection: null,
    setCharacterSelection: (characterSelection) => set({ characterSelection }),
    setGenderSelection: (genderSelection) => set({ genderSelection }),
}));

export default useWarriorStore;