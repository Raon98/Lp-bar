"use client";

import useLoadingStore from "@/app/store/useLoadingStore";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useAsyncStore } from "@/app/hooks/useAsyncStore";

export default function MainLayout() {
  const [isMount, setIsMount] = useState(true);
  const { setState} = useLoadingStore();
  const introStore = useAsyncStore(useLoadingStore, (state) => state);
  
  useEffect(() => {
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
                className="bg-no-repeat bg-transparent bg-center object-cover w-[70vw] block opacity-95"
              ></img>
              <img
                src="/assets/images/watch.png"
                alt="shop"
                className="bg-no-repeat bg-transparent bg-center object-cover absolute left-0 top-0 w-[10vw] rotate-z-[-45d"
              ></img>
            </div>
          </div>
        </>
      )}
    </>
  );
}
