"use client";

import { cn } from "@/app/common/utils/cn";
import useLoadingStore from "@/app/store/useLoadingStore";
import { useEffect } from "react";

export default function Loading() {
  const {state,setState} = useLoadingStore(state => state);

  useEffect(()=> {
    setTimeout(() => {
      setState('intro',false)
    }, 3000);
  },[])
  
  return (
    <>
      <div className={cn(`bg-slate-950 w-full h-full absolute left-0 top-0`,!state('clean','intro') && 'animate-fadeOut')}>
        <div className="flex justify-center items-center h-screen">
          <div className=" text-white text-3xl animate-fadeIn">처리야 잡화점</div>
        </div>
      </div>
    </>
  );
}
