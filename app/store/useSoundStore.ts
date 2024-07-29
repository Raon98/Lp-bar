import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SoundState {
    sound : {
        state : boolean,
        volume : number
    }
}

interface SoundActions {
    volumeControl : (volume:number) => void;
    muteVolume : () => void;
    maxVolume : () => void;
}

type Store = SoundActions & SoundState 


const actions = (set: any, get: any): SoundActions => ({
    volumeControl : (volume: number) => {
        if(volume === 0) get().muteVolume()
        set((prev :SoundState) => ({
            ...prev,
            sound: {
                state : true,
                volume : volume
            }
        }));
    },
    muteVolume : () => {
        set((prev :SoundState) => ({
            ...prev,
            sound: {
                state : false,
                volume : 0
            }
        }));
    },
    maxVolume : () => {
        set((prev :SoundState) => ({
            ...prev,
            sound: {
                state : true,
                volume : 100
            }
        }));
    }

});

const useSoundStore = create<Store>()(
    persist(
      (set, get) => ({
        sound: {
          state: false,
          volume: 30,
        },
        ...actions(set, get),
      }),
      {
        name: 'sound-storage', 
        storage: createJSONStorage(() => localStorage),
      }
    )
  );

export default useSoundStore;
