"use client";

import { cn } from "@/app/common/utils/cn";
import { useAsyncStore } from "@/app/hooks/useAsyncStore";
import useLoadingStore from "@/app/store/useLoadingStore";
import { useEffect } from "react";

export default function Loading() {
  const { setState } = useLoadingStore((state) => state);
  const introStore = useAsyncStore(useLoadingStore, (state) => state);
  useEffect(() => {
    setTimeout(() => {
      setState("state", "intro");
    }, 1000);
  }, []);

  return (
    <>
      <div
        className={cn(
          `bg-slate-950 w-full h-full absolute left-0 top-0 z-10`,
          introStore?.state.intro && "animate-fadeOut"
        )}
      >
        <div className="flex justify-center items-center h-screen">
          <div className=" text-white text-3xl animate-fadeIn">
            처리야 잡화점
          </div>
        </div>
      </div>
    </>
  );
}
