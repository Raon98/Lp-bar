"use client";
import { cn } from "@/app/common/utils/cn";
import useDragStore from "@/app/store/useDragStore";
import useModalStore from "@/app/store/useModalStore";
import useMotionStore from "@/app/store/useMotionStore";
import { useEffect, useRef, useState } from "react";
import useLpStore, { LpStateProp } from "@/app/store/useLpStore";

const BoxModal = () => {
  const { modalState, modalClose } = useModalStore();
  const { getLp, setLp } = useMotionStore();
  const { dragState, setDragState } = useDragStore();
  const { lpList } = useLpStore();

  const dropRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasScrollbar, setHasScrollbar] = useState(false);


  
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
      console.log(item);
    },
  };

  useEffect(() => {
    const element = containerRef.current;
    if (element) {
      setHasScrollbar(element.scrollWidth > element.clientWidth);
    }
  }, []);

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
              {!dragState && (
                <>
                  <div
                    className="flex justify-end items-center h-[3rem] mr-[3rem]"
                    onClick={() => modalClose("box")}
                  >
                    <div className="h-[2.5rem] w-[2.5rem] content-center text-center">
                      X
                    </div>
                  </div>
                  <div className={cn(`h-[75%] m-[0.75rem_2.5rem] flex justify-center overflow-x-auto ${lp.theme}_scrollbar`,
                  " space-x-10", hasScrollbar && "pl-[10rem]")} ref={containerRef}>
                    {lpList.map((item, idx) => (
                      <div className={cn(`min-w-[200px] max-w-[200px] relative`
                      )} key={idx}>
                        <button onClick={() => func.albumClick(item)}>
                          <img
                            src={`/assets/images/${item.img}.png`}
                            alt="lp"
                            className={cn(
                              `bg-no-repeat bg-transparent bg-center object-cover translate-x-[5%] w-[90%]`
                            )}
                          />
                          <div className="absolute left-0 top-0 z-20">
                            <img
                              src="https://swiperjs.com/demos/images/nature-1.jpg"
                              className="bg-no-repeat bg-transparent bg-center object-cover z-20"
                            />
                          </div>
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
                      <img
                        src={`/assets/images/${lp.img}.png`}
                        alt="boxIcon"
                        className={cn(
                          `bg-no-repeat bg-transparent bg-center object-cover translate-x-[40%]`,
                          "animate-lpInBox"
                        )}
                      />
                      <div className="absolute top-0 right-0 w-full h-full">
                        <img
                          src={`/assets/images/takeBox.png`}
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
