"use client";

import MeteorEffectLayout from "@/app/common/component/MeteorEffectLayout";
import useLoadingStore from "@/app/store/useLoadingStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Intro() {
  const [useMounted, setUseMounted] = useState(false);
  const router = useRouter();
  const { setState } = useLoadingStore();
  useEffect(() => {
    setUseMounted(true);
    setState("state", "intro", false);
    setState("clean", "intro", false);
  }, []);

  return (
    <>
      <MeteorEffectLayout className="z-[9]" />
      <div className="relative flex items-center justify-center h-full overflow-hidden">
        <div className="flex items-center justify-center bg-transparent rotate-180 relative z-10">
          <div className="sr-only">레코드판</div>
          {useMounted && (
            <>
              <img
                src="/assets/images/recode.png"
                alt="recode"
                className="bg-no-repeat bg-transparent bg-center object-cover w-full mt-[100%] scale-[1.3]"
              ></img>
            </>
          )}
        </div>
        <div className="absolute z-20 w-[5rem] h-[5rem] right-0 bg-[brown] rounded-[50%] bottom-0 mb-[5rem] mr-[7rem] xs:mr-[2rem]">
          <div className="sr-only">입장버튼</div>
          <div className="flex justify-center items-center w-full h-full">
            <button className="bg-amber-900 w-[4rem] h-[4rem] rounded-[50%] border border-solid border-gray-800 shadow-custom-border-1 relative">
              <div className="absolute top-0 left-4 bg-white w-1 h-3 shadow-custom-border-1 rotate-[-30deg]"></div>
            </button>
            {/* <button className="bg-slate-800"></button> */}
          </div>
        </div>
        <div className="absolute z-20 bottom-0 mb-[8rem] xs:mb-[27.5rem]">
          <img
            src="/assets/images/intro-text.png"
            alt="recode"
            className="bg-no-repeat bg-transparent bg-center object-cover w-full mt-[100%]"
          ></img>
        </div>
        <div className="absolute z-20 bottom-0 mb-[6rem] text-[wheat] text-[1rem]">
          Cheol's Lp Bar
        </div>
        <div className="absolute left-0 top-0 flex w-full h-screen z-0">
          <div className="w-[20%] h-full bg-matte-purple"></div>
          <div className="w-[20%] h-full bg-matte-green"></div>
          <div className="w-[20%] h-full bg-matte-red"></div>
          <div className="w-[20%] h-full bg-matte-skyblue"></div>
          <div className="w-[20%] h-full bg-matte-yellow"></div>
        </div>
        {/* <div className="w-1/3 z-10 flex justify-center">
          <button
            className="cursor-pointer w-12 mb-80"
            onClick={() => router.push("/shop")}
          >
            <div className="flex flex-col justify-center items-center text-3xl  text-white gap-5 ">
              {["입", "장", "하", "기"].map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </div>
          </button>
        </div> */}
      </div>
    </>
  );
}
