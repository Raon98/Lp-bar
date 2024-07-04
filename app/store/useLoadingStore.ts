import { create } from "zustand";

interface LoadingState {
  state: {
    intro: boolean;
  };
  clean: {
    intro: boolean;
  };
}

interface LoadingType {
  intro: boolean;
}

interface LoadingAction {
  setState: (option: keyof LoadingState, key: keyof LoadingType, state?: boolean) => void;
  getState: (option: keyof LoadingState, key: keyof LoadingType) => boolean;
}

const useLoadingStore = create<LoadingState & LoadingAction>((set, get) => ({
  state: {
    intro: false,
  },
  clean: {
    intro: false,
  },
  setState: (option, key, state = true) => {
    set((currentState) => ({
      ...currentState,
      [option]: {
        ...currentState[option],
        [key]: state,
      },
    }));
  },
  getState: (option, key) => {
    const currentState = get();
    return currentState[option][key];
  },
}));

export default useLoadingStore;
