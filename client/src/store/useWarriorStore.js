import { createStore } from "zustand";

const useWarriorStore = createStore((set) => ({
    characterSelection: null,
    genderSelection: null,
    warriorLore: null,
    chosenWarrior: null,
    setCharacterSelection: (characterSelection) => set({ characterSelection }),
    setGenderSelection: (genderSelection) => set({ genderSelection }),
    setWarriorLore: (warriorLore) => set({ warriorLore }),
    setChosenWarrior: (chosenWarrior) => set({ chosenWarrior })
}));

export default useWarriorStore;