import { create } from "zustand";

type Store = {
  dragState : boolean;
  setDragState : (option:boolean) => void;
}
const useDragStore = create<Store>((set) => ({
  dragState : false,
  setDragState : (option:boolean = false) => {
    set(({dragState : option}))
  }  
}));

export default useDragStore;
