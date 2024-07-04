import { create } from "zustand";

interface LoadingState {
    introState : boolean
}


interface LoadingAction {
    setIntroState : (callback?:()=>void) => void
}
const useLoadingStore = create<LoadingState & LoadingAction>((set) => ({
    introState : true,
    setIntroState : (callback?) => {
        
        set(() => ({introState : false}))

        setTimeout(()=> {
            if(callback) callback();
        },1000)
    }
}))

export default useLoadingStore