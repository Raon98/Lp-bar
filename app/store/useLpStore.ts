import { create } from "zustand";

 /* purple: '#8748E1',green: '#65D35D', red: '#EF6363',skyblue: '#87CEEB',yellow: '#FFD700',*/

export const lpInitState  = {
  doc_lp1 : {
    state : false,
    theme : 'red',
    iconTheme : 'w',
    
  }
};

const actions = (set: any, get: any) => ({
  
});

const useMotionStore = create((set,get) => ({
    ...lpInitState,
    ...actions(set, get),
}));

export default useMotionStore;
