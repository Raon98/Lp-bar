import { create } from "zustand";

/* purple: '#8748E1',green: '#65D35D', red: '#EF6363',skyblue: '#87CEEB',yellow: '#FFD700',*/


export const noneLp = {
  key: '',
  idx: 0,
  state: null,
  img: "",
  theme: "lightGray",
  iconTheme: "b",
  since: null,
  coverImg: ""
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
    coverImg: "cover_1"
  },
  {
    key: "lp2",
    idx: 2,
    state: false,
    img: "pj_lp1",
    theme: "green",
    iconTheme: "w",
    since: 2024,
    coverImg : "cover_2"
  },
  {
    key: "lp3",
    idx: 3,
    state: false,
    img: "pj_lp2",
    theme: "blue",
    iconTheme: "w",
    since: 2024,
    coverImg : "cover_3"
  }
 
];

export interface LpStateProp {
  key: string;
  idx: number;
  state: boolean;
  img: string;
  theme: string;
  iconTheme: string;
  since: number;
  coverImg : string;
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

const useLpStore = create<Store>((set, get) => ({
  lpList: lpInitState,
  ...actions(set, get),
}));

export default useLpStore;
