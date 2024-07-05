"use client";

import useLoadingStore from "@/app/store/useLoadingStore";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useAsyncStore } from "@/app/hooks/useAsyncStore";

export default function MainLayout() {
  const [isMount, setIsMount] = useState(true);
  const { clean,setState } = useLoadingStore();
  const introStore = useAsyncStore(useLoadingStore, (state) => state);
  const widthRandom = Math.floor(Math.random() * 1920);
  const heightRandom = Math.floor(Math.random() * 1080);
  
  useEffect(() => {
    if(clean.intro){
      setState("clean", "intro",false);
      setState("state", "intro",false);
    }
    setIsMount(!isMount);

    setTimeout(() => {
      setState("clean", "intro");
    }, 3000);
  }, []);
  return (
    <>
      {!introStore?.clean.intro && <Loading />}
      {!isMount && (
        <>
          <div className="w-full h-full overflow-hidden relative">
            <img
              src="/assets/images/tree.jpg"
              alt="shop"
              className="absolute left-0 right-0 top-0 bottom-0 bg-no-repeat bg-transparent bg-center object-cover w-screen h-screen "
            />
            <div className=" relative flex justify-center items-center w-full h-full select-none">
              <img
                src="/assets/images/carpet.png"
                alt="shop"
                className="bg-no-repeat bg-transparent bg-center object-cover w-[1280px] block opacity-95"
              ></img>
              <div className="absolute left-[10%] top-[15%]">
                <img
                  src="/assets/images/watch.png"
                  alt="shop"
                  className="bg-no-repeat bg-transparent bg-center object-cover  w-[200px] rotate-[-15deg]"
                ></img>
              </div>
            </div>
            
          </div>
        </>
      )}
    </>
  );
}
