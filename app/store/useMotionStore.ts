import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = LoadingState & LoadingAction;

interface State {
  switch?: boolean;
  spinStop?: boolean;
  recode?: boolean;
  sound? : boolean;
  play? : boolean,
  boxOpen? : boolean;
}

interface LoadingState {
  intro : State,
  main : State,
}

interface LoadingAction {
  setState: (option: keyof LoadingState, key: keyof State, state?: boolean) => void;
  getState: (option: keyof LoadingState, key: keyof State) => boolean;
}

const initialState: LoadingState = {
  intro : {
    switch: false,
    spinStop: false,
    recode: false
  },
  main : {
    switch: false,
    spinStop: false,
    sound : true,
    play : false,
    boxOpen : false
  }
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


const useMotionStore = create<Store>((set,get) => ({
    ...initialState,
    ...actions(set, get),
}));

export default useMotionStore;
