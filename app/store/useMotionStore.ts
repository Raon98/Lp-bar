import { create } from "zustand";
import { persist } from "zustand/middleware";
import useLpStore, { LpStateProp } from "./useLpStore";

type Store = LoadingState & LoadingAction;

interface State {
  switch?: boolean;
  spinStop?: boolean;
  recode?: boolean;
  sound?: boolean;
  play?: boolean;
  boxState?: boolean;
  lp?: object;
}

interface LoadingState {
  intro: State;
  main: State;
}
const initLp = {
  idx: null,
  state: null,
  img: "",
  theme: "",
  iconTheme: "",
  since: null,
};
interface LoadingAction {
  setState: (
    option: keyof LoadingState,
    key: keyof State,
    state?: boolean
  ) => void;
  setChangeState: (option: keyof LoadingState, key: keyof State) => void;
  setLp: (lp: LpStateProp) => void;
  getState: (option: keyof LoadingState, key: keyof State) => boolean;
  getLp: () => LpStateProp;
}

const initialState: LoadingState = {
  intro: {
    switch: false,
    spinStop: false,
    recode: false,
  },
  main: {
    lp: initLp,
    sound: true,
    play: false,
    boxState: false,
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
  setLp: (lp: LpStateProp) => {
    const lpObj = lp ? lp : initLp
    set((currentState: LoadingState) => ({
      ...currentState,
      main: {
        ...currentState["main"],
        lp: lpObj,
      },
    }));
  },
  setChangeState: (option, key) => {
    set((currentState: LoadingState) => ({
      ...currentState,
      [option]: {
        ...currentState[option],
        [key]: !currentState[option][key],
      },
    }));
  },

  getState: (option, key) => {
    const currentState = get();
    return currentState[option][key];
  },
  getLp: () => {
    const mainState = get().main;
    return mainState.lp;
  },
});

const useMotionStore = create<Store>((set, get) => ({
  ...initialState,
  ...actions(set, get),
}));

export default useMotionStore;
