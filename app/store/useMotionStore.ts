import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LpStateProp } from "./useLpStore";

type Store = LoadingState & LoadingAction;

interface State {
  switch?: boolean;
  spinStop?: boolean;
  recode?: boolean;
  sound? : boolean;
  play? : boolean,
  boxState? : boolean;
  lp? : object
}

interface LoadingState {
  intro : State,
  main : State,
}

interface LoadingAction {
  setState: (option: keyof LoadingState, key: keyof State, state?: boolean) => void;
  setLpState : (lp : LpStateProp) => void;
  setChangeState : (option: keyof LoadingState, key: keyof State) => void;
  getState: (option: keyof LoadingState, key: keyof State) => boolean;
}

const initialState: LoadingState = {
  intro : {
    switch: false,
    spinStop: false,
    recode: false
  },
  main : {
    lp : {
      idx : 1,
      state : true,
      img : 'doc_lp1',
      theme : 'red',
      iconTheme : 'w',
      since : 1998
    },
    sound : true,
    play : false,
    boxState : false
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
  setLpState: (lp : LpStateProp) => {
    set((currentState: LoadingState) => ({
      ...currentState,
      main: {
        ...currentState['main'],
        lp: lp,
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
});


const useMotionStore = create<Store>((set,get) => ({
    ...initialState,
    ...actions(set, get),
}));

export default useMotionStore;
