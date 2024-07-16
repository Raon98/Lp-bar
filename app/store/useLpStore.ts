import { create } from "zustand";

 /* purple: '#8748E1',green: '#65D35D', red: '#EF6363',skyblue: '#87CEEB',yellow: '#FFD700',*/

export const lpInitState  = [
  {
    idx : 1,
    state : false,
    img : 'doc_lp1',
    theme : 'red',
    iconTheme : 'w',
    since : 1998
  },
  {
    idx : 2,
    state : false,
    img : 'pj_lp1',
    theme : 'green',
    iconTheme : 'w',
    since : 2024
  },
  
]

interface lpAction {
  getLpList : () => void
}

const actions = (set: any, get: any):lpAction => ({
    getLpList : () => {
      const lp = get();
      return lp
    }
});

const useMotionStore = create((set,get) => ({
    ...lpInitState,
    ...actions(set, get),
}));

export default useMotionStore;
