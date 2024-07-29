"use client";

import { cn } from "@/app/common/utils/cn";
import MeteorEffectLayout from "@/app/features/intro/component/MeteorEffectLayout";
import useLpStore from "@/app/store/useLpStore";
import useMotionStore from "@/app/store/useStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Intro() {
  const { getState, setState } = useMotionStore();
  const useSwitch = getState("intro", "switch");
  const useSpinStop = getState("intro", "spinStop");
  const useRecode = getState("intro", "recode");
  const router = useRouter();
  const { getKeyLp } = useLpStore();
  const { setLp } = useMotionStore();
  const initLp = getKeyLp("lp1");
  const func = {
    onclick: () => {
      setState("intro", "switch");
    },
  };

  useEffect(() => {
    setLp(initLp);
  }, [initLp]);
  useEffect(() => {
    if (useSwitch) {
      setState("intro", "spinStop");
    }
  }, [useSwitch]);

  useEffect(() => {
    if (useSpinStop) {
      setTimeout(() => {
        setState("intro", "spinStop", false);
        setState("intro", "recode");
      }, 3000);
    }
  }, [useSpinStop]);

  useEffect(() => {
    if (useRecode) {
      setTimeout(() => {
        router.push("/main");
      }, 1000);
    }
  }, [useRecode]);

  return (
    <>
      {!useRecode && <MeteorEffectLayout className="z-[9]" />}
      <div className="relative flex items-center justify-center h-full overflow-hidden">
        <div className="flex items-center justify-center bg-transparent rotate-180 relative z-30">
          <div className="sr-only">레코드판</div>
          <img
            src="/assets/images/recode.png"
            alt="recode"
            className={cn(
              "bg-no-repeat bg-transparent bg-center object-cover w-full mt-[100%] scale-[1.2]",
              !useRecode && !useSpinStop && "animate-spin",
              useSpinStop && "animate-spinStop",
              useRecode && "animate-introRecodeUp"
            )}
          ></img>
        </div>
        <div
          className={cn(
            `absolute z-40 w-[5rem] h-[5rem] right-0 bg-[brown] rounded-[50%] bottom-0 mb-[5rem] mr-[7rem] xs:mr-[2rem] rotate-[80deg]`,
            useSwitch && "animate-switchStop",
            useRecode && "z-0"
          )}
        >
          <div className="sr-only">입장버튼</div>
          <div className="flex justify-center items-center w-full h-full rounded-[50%] shadow-custom-border-2">
            <button
              className="bg-amber-900 w-[4rem] h-[4rem] rounded-[50%] border border-solid border-gray-800 shadow-custom-border-1 relative"
              onClick={() => func.onclick()}
            >
              <div className="absolute top-0 left-4 bg-white w-1 h-3 shadow-custom-border-1 rotate-[-30deg]"></div>
            </button>
          </div>
        </div>
        <div
          className={cn(
            "absolute z-20 bottom-0 mb-[8rem] xs:mb-[27.5rem]",
            useRecode && "animate-fadeOut"
          )}
        >
          <img
            src="/assets/images/intro-text.png"
            alt="recode"
            className="bg-no-repeat bg-transparent bg-center object-cover w-full mt-[100%]"
          ></img>
        </div>
        <div
          className={cn(
            "absolute z-20 bottom-0 mb-[6rem] text-[wheat] text-[1rem]",
            useRecode && "animate-fadeOut"
          )}
        >
          Polariod Lp Bar
        </div>
        <div className="absolute left-0 top-0 flex w-full h-screen z-100">
          <div className="w-[20%] h-full bg-matte-purple"></div>
          <div className="w-[20%] h-full bg-matte-green"></div>
          <div
            className={cn(
              "w-[20%] h-full bg-matte-red",
              useRecode && "animate-introScale"
            )}
          ></div>
          <div className="w-[20%] h-full bg-matte-skyblue"></div>
          <div className="w-[20%] h-full bg-matte-yellow"></div>
        </div>
      </div>
    </>
  );
}
