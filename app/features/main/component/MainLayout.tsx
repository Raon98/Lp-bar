"use client";

import useLoadingStore from "@/app/store/useLoadingStore";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useAsyncStore } from "@/app/hooks/useAsyncStore";
import Header from "@/app/common/component/Header";

export default function MainLayout() {
  const [isMount, setIsMount] = useState(true);
  const {setState } = useLoadingStore();
  const introStore = useAsyncStore(useLoadingStore, (state) => state);

  useEffect(() => {
    setIsMount(false);

    setTimeout(() => {
      setState("clean", "intro");
    }, 3000);
  }, []);
  return (
    <>
      {!introStore?.clean.intro && <Loading />}
      {!isMount && (
        <>
          {introStore?.clean.intro && <Header />}
          <div className="flex flex-col justify-start w-full h-screen overflow-y-auto relative mt-14">
            <div className="flex flex-col justify-center items-center h-1/4">
              <div>처리야 잡화점에 오신걸 환영합니다.</div>
              <div>무엇을 구매하시겠습니까?</div>
            </div>
            <div className="flex justify-center items-center gap-10 h-3/4">
              <div>아이템1 - 이력서</div>
              <div>아이템2 - 프로젝트</div>
              <div>아이템3 - 시계</div>
            </div>
            <div className="flex justify-center items-center gap-10 h-3/4">
              <div>아이템1 - 이력서</div>
              <div>아이템2 - 프로젝트</div>
              <div>아이템3 - 시계</div>
            </div>
            <div className="flex justify-center items-center gap-10 h-3/4">
              <div>아이템1 - 이력서</div>
              <div>아이템2 - 프로젝트</div>
              <div>아이템3 - 시계</div>
            </div>
            {/* <img
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
            </div> */}
          </div>
        </>
      )}
    </>
  );
}
