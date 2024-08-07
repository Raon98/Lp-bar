"use client";
import { cn } from "@/app/common/utils/cn";
import useDragStore from "@/app/store/useDragStore";
import useModalStore from "@/app/store/useModalStore";
import useMotionStore from "@/app/store/useStore";
import { useEffect, useRef, useState } from "react";
import useLpStore, { LpStateProp } from "@/app/store/useLpStore";
import Image from 'next/image'
const BoxModal = () => {
  const { modalState, modalClose } = useModalStore();
  const { getLp, setLp,getState } = useMotionStore();
  const { dragState, setDragState } = useDragStore();
  const { lpList } = useLpStore();
  const dropRef = useRef<HTMLDivElement | null>(null);
  const lpSwitch = getState("main", "lpSwitch");
  const lp = getLp();


  const func = {
    onDrop: (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      const data = e.dataTransfer.getData("text");

      if (data === "dragging") {
        setDragState(false);
        setLp();
      }
    },
    albumClick: (item: LpStateProp) => {
      if(!lpSwitch){
        setLp(item);
      }
    },
  };

  return (
    <>
      {modalState("box") && (
        <div className="w-full h-[40%] absolute z-30 left-0 bottom-0 overflow-hidden">
          <div className="flex flex-col h-full justify-end ">
            <div
              className={cn(
                "h-0 backdrop-blur-xl bg-gray-rgba-0.3",
                modalState("box") && "animate-boxOpen"
              )}
            >
              {!dragState  && (
                <>
                  <div
                    className="flex justify-end items-center h-[3rem] mr-[3rem]"
                    onClick={() => modalClose("box")}
                  >
                    <div className="h-[2.5rem] w-[2.5rem] content-center text-center">
                      
                      <button className="w-[50%] mt-6">
                         <Image
                              src={`/assets/images/backIcon.png`}
                              width={30}
                              height={30}
                              alt="close"
                              />
                      </button>
                    </div>
                  </div>
                  <div
                    className={cn(
                      `h-[75%] m-[0.75rem_2.5rem] flex items-center overflow-x-auto overflow-y-hidden ${lp.theme}_scrollbar space-x-10 pt-6`,
                    )}
                  >
                    {lpList.map((item, idx) => (
                      <div
                        className={cn(
                          `min-w-[200px] max-w-[200px] relative hover:animate-coverUp`
                        )}
                        key={idx}
                      >
                        <button onClick={() => func.albumClick(item)}>
                        <Image
                            src={`/assets/images/${item.coverImg}.png`}
                            width={300}
                            height={300}
                            alt="lpBoard"
                            priority
                           />
                          
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {dragState && (
                <>
                  <div
                    className="h-full m-[0.75rem_4.5rem] flex justify-center items-center"
                    ref={dropRef}
                    onDrop={(e) => func.onDrop(e)}
                    onDragOver={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div className="w-[15%] relative translate-x-[-20%]">
                      <Image
                            src={`/assets/images/${lp.img}.png`}
                            width={300}
                            height={300}
                            alt="lpBoard"
                         
                            className={cn('translate-x-[40%] w-[98%] animate-lpInBox')}
                           />

                      <div className="absolute top-0 right-0 w-full h-full">
                        <Image
                            src={`/assets/images/${lp.coverImg}.png`}
                            width={300}
                            height={300}
                            alt="lpBoard"
                           />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BoxModal;
