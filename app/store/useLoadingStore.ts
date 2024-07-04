import { create } from "zustand";

interface LoadingState {
  clean: CleanType;
}

interface CleanType {
  intro: boolean;
}

interface LoadingAction {
  setState: (key: keyof CleanType, state?: boolean) => void;
  cleanLoading: (key: keyof CleanType) => void;
  state: (option: keyof LoadingState ,key: keyof CleanType) => boolean;
}

/* Clean */
const CleanDefault: CleanType = {
  intro: false,
};

const useLoadingStore = create<LoadingState & LoadingAction>((set, get) => ({
  clean: CleanDefault,
  setState: (key, state = true) => {
    set((currentState) => ({
      clean: {
        ...currentState.clean,
        [key]: state,
      },
    }));
  },
  cleanLoading: (key) => {
    set((currentState) => ({
      clean: {
        ...currentState.clean,
        [key]: !currentState.clean[key],
      },
    }));
  },
  state: (option ,key) => {
    const currentState = get();
    return currentState[option][key];
  },
}));

export default useLoadingStore;
