import { create } from "zustand";
import { persist } from "zustand/middleware";
import useLpStore, { LpStateProp, lpInitState, noneLp } from "./useLpStore";

type Store = LoadingState & LoadingAction;

interface State {
  switch?: boolean;
  spinStop?: boolean;
  recode?: boolean;
  sound?: number;
  play?: boolean;
  lp?: object;
  lpSwitch? : boolean;
}

interface LoadingState {
  intro: State;
  main: State;
}

interface LoadingAction {
  setState: (
    option: keyof LoadingState,
    key: keyof State,
    state?: boolean
  ) => void;
  setChangeState: (option: keyof LoadingState, key: keyof State) => void;
  setLp: (lp?: LpStateProp) => void;
  getState: (option: keyof LoadingState, key: keyof State) => boolean;
  getLp: () => LpStateProp;
  LpAnimationSwitch: () => void;
}

const initialState: LoadingState = {
  intro: {
    switch: false,
    spinStop: false,
    recode: false,
  },
  main: {
    lp: lpInitState[0],
    lpSwitch : false,
    sound: 30,
    play: false,
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
  setLp: (lp?: LpStateProp) => {
    const lpObj = lp ? lp : noneLp
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

  LpAnimationSwitch : () => {
    set((currentState: LoadingState) => ({
      ...currentState,
      main: {
        ...currentState["main"],
        lpSwitch: true,
      },
    }));
   setTimeout(()=> {
    set((currentState: LoadingState) => ({
      ...currentState,
      main: {
        ...currentState["main"],
        lpSwitch: false,
      },
    }));
   },1500)

  }
});

const useStore = create<Store>((set, get) => ({
  ...initialState,
  ...actions(set, get),
}));

export default useStore;
