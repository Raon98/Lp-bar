import { create } from "zustand";


interface ModalState {
    [key:string] : boolean
}

interface ModalActions {
    modalOpen : (key : keyof ModalState) => void;
    modalClose : (key : keyof ModalState) => void;
    modalState : (key : keyof ModalState) => void;
}

type Store = ModalActions

const modals : ModalState = {
  box : false,
};

const actions = (set: any, get: any): ModalActions => ({
    modalOpen : (key : keyof ModalState) => {
        set((prev:ModalState) => ({
            ...prev,
            [key] : true
        }))
    },
    modalClose : (key : keyof ModalState) => {
        set((prev:ModalState) => ({
            ...prev,
            [key] : false
        }))
    },
    modalState : (key : keyof ModalState) => {
        return modals[key];
    }
});

const useModalStore = create<Store>((set, get) => ({
  ...modals,
  ...actions(set, get),
}));

export default useModalStore;
