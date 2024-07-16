import { create } from "zustand";

 /* purple: '#8748E1',green: '#65D35D', red: '#EF6363',skyblue: '#87CEEB',yellow: '#FFD700',*/

 export const lpInitState:LpStateProp[]  = [
  {
    key : 'lp1',
    idx : 1,
    state : true,
    img : 'doc_lp1',
    theme : 'red',
    iconTheme : 'w',
    since : 1998
  },
  {
    key : 'lp2',
    idx : 2,
    state : false,
    img : 'pj_lp1',
    theme : 'green',
    iconTheme : 'w',
    since : 2024
  }, 
]

 export interface LpStateProp {
  key : string,
  idx : number,
  state : boolean,
  img : string,
  theme : string,
  iconTheme : string,
  since : number
 }

 interface lpAction {
  getLpList : () => LpStateProp[]
}

type Store = lpAction

const actions = (set: any, get: any):lpAction => ({
    getLpList : () => {
      const lp = get().lpList
      return lp
    }
});

const useMotionStore = create<Store>((set,get) => ({
    lpList : lpInitState,
    ...actions(set, get),
}));

export default useMotionStore;
