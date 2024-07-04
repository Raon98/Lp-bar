"use client";

import { cn } from "@/app/common/utils/cn";
import useLoadingStore from "@/app/store/useLoadingStore";

export default function Loading() {
  const {introState} = useLoadingStore(state => state);
  
  return (
    <>
      <div className={cn(`bg-slate-950 w-full h-full absolute left-0 top-0`,!introState && 'animate-fadeOut')}>
        <div className="flex justify-center items-center h-screen">
          <div className=" text-white text-3xl animate-fadeIn">처리야 잡화점</div>
        </div>
      </div>
    </>
  );
}
