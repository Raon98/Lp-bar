import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Tab = {
  idx: number;
  tabNm: string;
  active: boolean;
  screenActive : boolean;
  startHeight : number;
  endHeight : number;
};

type Store = {
  tab : Tab[];
  tabChange : boolean;
  setSectionActive: (idx: number) => void;
  setScreenSectionActive: (idx: number) => void;
  setSectionHeight: (idx : number, startHeight : number, endHeight : number) => void;
  setTabChange : ()=> void;
  setInitTab : (callback? : () => void) => void;
  getTabList  : (exceptIdx? : number[]) => Tab[];
  
}

export const initTab = 
[{idx : 0 , tabNm : 'introduce', active : true, screenActive : true, startHeight : 0,endHeight : 0},
  {idx : 1 , tabNm : 'Features',active : false,screenActive : false, startHeight : 0,endHeight : 0},
  {idx : 2 , tabNm : 'Tech Stack',active : false,screenActive : false, startHeight : 0,endHeight : 0},
  {idx : 3 , tabNm : 'Troubles',active : false,screenActive : false, startHeight : 0,endHeight : 0},
  {idx : 4 , tabNm : 'Insight',active : false,screenActive : false, startHeight : 0,endHeight : 0}
]

const useSectionStore = create<Store>()(persist((set,get) => ({
  tab : initTab,
  tabChange : false,
  setSectionActive : (idx : number) => {
    set((state) => ({
      tab : state.tab.map(tab => tab.idx === idx ? {...tab, active : true} : {...tab, active :false})
    }))
  },
  setScreenSectionActive : (idx : number) => {
    set((state) => ({
      tab : state.tab.map(tab => tab.idx === idx ? {...tab, screenActive : true} : {...tab})
    }))
  },
  setSectionHeight : (idx : number, startHeight : number, endHeight : number) => {
    set((state) => ({
      tab : state.tab.map(tab => tab.idx === idx ? {...tab, startHeight : startHeight, endHeight : endHeight} : {...tab})
    }))
  },
  setInitTab : (callback? : () => void) => {
    set({ tab : initTab});
    if(callback){
      callback();
    } 
  },
  setTabChange : () => {
    set({ tabChange : true});
    setTimeout(()=> {
      set({ tabChange : false});
    },3000)
  },
  getTabList : (exceptIdx? : number[]) => {
    return exceptIdx && exceptIdx.length > 0 ? get().tab.filter((tab) => !exceptIdx.includes(tab.idx)) : get().tab
  } 
}),
  {
    name : 'tab_store',
    partialize : (state) => ({ tab: state.tab }), 
  }
));

export default useSectionStore;
