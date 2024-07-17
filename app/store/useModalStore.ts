import { create } from "zustand";


export interface ModalState {
    box : boolean,
}

interface ModalActions {
    modalOpen : (key : keyof ModalState) => void;
    modalClose : (key : keyof ModalState) => void;
    modalList : () => ModalState;
    modalState : (key : keyof ModalState) => boolean
}

type Store = ModalActions

const modalsList : ModalState = {
  box : false,
};

const actions = (set: any, get: any): ModalActions => ({
    modalOpen : (key : keyof ModalState) => {
        set((prev: ModalState) => ({
            ...prev,
            [key]: true
        }));
    },
    modalClose : (key : keyof ModalState) => {
        set((prev:ModalState) => ({
            ...prev,
            [key] : false
        }))
    },
    modalList : () => {
        const state = get();
        return state;
    },
    modalState : (key: keyof ModalState) => {
        const state = get();
        return state[key]
    }
});

const useModalStore = create<Store>((set, get) => ({
  ...modalsList,
  ...actions(set, get),
}));

export default useModalStore;
