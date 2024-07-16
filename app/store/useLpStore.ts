import { create } from "zustand";

/* purple: '#8748E1',green: '#65D35D', red: '#EF6363',skyblue: '#87CEEB',yellow: '#FFD700',*/


export const noneLp = {
  key: '',
  idx: 0,
  state: null,
  img: "",
  theme: "lightGray",
  iconTheme: "b",
  since: null
};

export const lpInitState: LpStateProp[] = [
  {
    key: "lp1",
    idx: 1,
    state: true,
    img: "doc_lp1",
    theme: "red",
    iconTheme: "w",
    since: 1998,
  },
  {
    key: "lp2",
    idx: 2,
    state: false,
    img: "pj_lp1",
    theme: "green",
    iconTheme: "w",
    since: 2024,
  },
];

export interface LpStateProp {
  key: string;
  idx: number;
  state: boolean;
  img: string;
  theme: string;
  iconTheme: string;
  since: number;
}

interface lpAction {
  getKeyLp: (key : string) => LpStateProp;
}
interface lpState {
  lpList: LpStateProp[];
}
type Store = lpAction & lpState

const actions = (set: any, get: any): lpAction => ({
  getKeyLp: (key: string) => {
    const lpList = get().lpList as LpStateProp[];
    return lpList?.length > 0 ? lpList.filter(v => v.key === key)[0] : lpList[0]
  },
});

const useMotionStore = create<Store>((set, get) => ({
  lpList: lpInitState,
  ...actions(set, get),
}));

export default useMotionStore;
