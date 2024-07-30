import { create } from "zustand";
import { persist } from "zustand/middleware";

type Tab = {
  idx: number;
  tabNm: string;
  active: boolean;
};

type Store = {
  tab : Tab[];
  setTabActive: (idx: number) => void;
  setInitTab : () => void;
  getTabList  : (exceptIdx? : number[]) => Tab[]
}

const initTab = [{idx : 1 , tabNm : 'intro', active : true},
  {idx : 2 , tabNm : 'Features',active : false},
  {idx : 3 , tabNm : 'Tech',active : false},
  {idx : 4 , tabNm : 'Troubles',active : false},
  {idx : 5 , tabNm : 'Insight',active : false}
]

const useTabStore = create<Store>()(persist((set,get) => ({
  tab : initTab,
  setTabActive : (idx : number) => {
    set((state) => ({
      tab : state.tab.map(tab => tab.idx === idx ? {...tab, active : true} : {...tab, active :false})
    }))
  },
  setInitTab : () => set({ tab : initTab}),
  getTabList : (exceptIdx? : number[]) => {
    return exceptIdx && exceptIdx.length > 0 ? get().tab.filter((tab) => !exceptIdx.includes(tab.idx)) : get().tab
  } 
}),
  {
    name : 'tab_store',
    partialize : (state) => ({ tab: state.tab }), 
  }
));

export default useTabStore;
