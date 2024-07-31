import { create } from "zustand";
import { persist } from "zustand/middleware";

type Tab = {
  idx: number;
  tabNm: string;
  active: boolean;
  height : number;
};

type Store = {
  tab : Tab[];
  setSectionActive: (idx: number) => void;
  setSectionHeight: (idx : number, height : number) => void;
  setInitTab : (callback? : () => void) => void;
  getTabList  : (exceptIdx? : number[]) => Tab[];
  
}

const initTab = [{idx : 0 , tabNm : 'introduce', active : true, height : 0},
  {idx : 1 , tabNm : 'Features',active : false,height : 0},
  {idx : 2 , tabNm : 'Tech Stack',active : false,height : 0},
  {idx : 3 , tabNm : 'Troubles',active : false,height : 0},
  {idx : 4 , tabNm : 'Insight',active : false,height : 0}
]

const useSectionStore = create<Store>()(persist((set,get) => ({
  tab : initTab,
  setSectionActive : (idx : number) => {
    set((state) => ({
      tab : state.tab.map(tab => tab.idx === idx ? {...tab, active : true} : {...tab, active :false})
    }))
  },
  setSectionHeight : (idx : number, height : number) => {
    set((state) => ({
      tab : state.tab.map(tab => tab.idx === idx ? {...tab, height : height} : {...tab})
    }))
  },
  setInitTab : (callback? : () => void) => {
    set({ tab : initTab});
    if(callback){
      callback();
    } 
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
