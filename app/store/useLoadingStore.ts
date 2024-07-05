import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = LoadingState & LoadingAction;

interface State {
  intro: boolean;
}

interface LoadingState {
  state: State;
  clean: State;
}

interface LoadingAction {
  setState: (option: keyof LoadingState, key: keyof State, state?: boolean) => void;
  getState: (option: keyof LoadingState, key: keyof State) => boolean;
}

const initialState: LoadingState = {
  state: {
    intro: false,
  },
  clean: {
    intro: false,
  },
};

const actions = (set: any, get: any): LoadingAction => ({
  setState: (option, key, state = true) => {
    set((currentState: LoadingState) => ({
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
});

const useLoadingStore = create<Store>()(
  persist(
    (set, get) => ({
      ...initialState,
      ...actions(set, get),
    }),
    {
      name: 'loading-storage', 
      getStorage: () => localStorage,
      onRehydrateStorage : () => {
        
      }
    }
  )
);

export default useLoadingStore;
