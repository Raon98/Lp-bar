"use client";

import { useEffect, useRef, useState } from "react";
import Loading from "./Loading";
import useLoadingStore from "@/app/store/useLoadingStore";

export default function MainLayout() {
  const [isMount, setIsMount] = useState(true);
  const {state,cleanLoading} = useLoadingStore();
  const clean = state('clean','intro')
  useEffect(() => {
    setIsMount(!isMount);

    setTimeout(() => {
      cleanLoading('intro')
    }, 3000);

  }, []);

  return (
    <>
      {!clean && <Loading />}
      {!isMount && (
        <>
          <div className="w-full h-full overflow-hidden relative">
            <img
              src="/assets/images/tree.jpg"
              alt="shop"
              className="absolute left-0 right-0 top-0 bottom-0 bg-no-repeat bg-transparent bg-center object-cover w-screen h-screen "
            />
            <div className=" relative flex justify-center items-center w-full h-screen">
              <img
                src="/assets/images/carpet.jpg"
                alt="shop"
                className="bg-no-repeat bg-transparent bg-center object-cover w-[80vw]"
              ></img>
            </div>
          </div>
        </>
      )}
    </>
  );
}
