import { create } from "zustand";

interface LoadingState {
    introState : boolean
}


interface LoadingAction {
    setIntroState : () => void
}
const useLoadingStore = create<LoadingState & LoadingAction>((set) => ({
    introState : false,
    setIntroState : () => set(state => ({introState : !state.introState}))
}))

export default useLoadingStore