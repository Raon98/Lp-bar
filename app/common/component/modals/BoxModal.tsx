"use client";
import { cn } from "@/app/common/utils/cn";
import useDragStore from "@/app/store/useDragStore";
import useModalStore from "@/app/store/useModalStore";
import useMotionStore from "@/app/store/useStore";
import { useEffect, useRef, useState } from "react";
import useLpStore, { LpStateProp } from "@/app/store/useLpStore";

const BoxModal = () => {
  const { modalState, modalClose } = useModalStore();
  const { getLp, setLp,getState } = useMotionStore();
  const { dragState, setDragState } = useDragStore();
  const { lpList } = useLpStore();
  const dropRef = useRef<HTMLDivElement | null>(null);
  const lpSwitch = getState("main", "lpSwitch");
  const lp = getLp();
  
  const [mount, setMount] = useState(false)
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

  useEffect(()=> {
    setMount(true)
  },[])
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
              {!dragState && mount && (
                <>
                  <div
                    className="flex justify-end items-center h-[3rem] mr-[3rem]"
                    onClick={() => modalClose("box")}
                  >
                    <div className="h-[2.5rem] w-[2.5rem] content-center text-center">
                      
                      <button className="w-[50%] mt-6">
                        <img
                          src={`/assets/images/backIcon.png`}
                          className="bg-no-repeat bg-transparent bg-center object-cover z-20"
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
                        <img
                              src={`/assets/images/${item.coverImg}.png`}
                              className="bg-no-repeat bg-transparent bg-center object-cover z-20"
                            />
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {dragState && mount && (
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
                      <img
                        src={`/assets/images/${lp.img}.png`}
                        alt="boxIcon"
                        className={cn(
                          `bg-no-repeat bg-transparent bg-center object-cover translate-x-[40%] w-[98%]`,
                          "animate-lpInBox"
                        )}
                      />
                      <div className="absolute top-0 right-0 w-full h-full">
                        <img
                          src={`/assets/images/${lp.coverImg}.png`}
                          alt="boxIcon"
                          className={cn(
                            `bg-no-repeat bg-transparent bg-center object-cover`
                          )}
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
