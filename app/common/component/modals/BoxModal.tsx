"use client";
import { cn } from "@/app/common/utils/cn";
import useDragStore from "@/app/store/useDragStore";
import useModalStore from "@/app/store/useModalStore";
import useMotionStore from "@/app/store/useMotionStore";
import { useRef, useState } from "react";

const BoxModal = () => {
  const { modalState, modalClose } = useModalStore();
  const { setLp } = useMotionStore();
  const dropRef = useRef<HTMLDivElement | null>(null);
  const { dragState, setDragState } = useDragStore();
  const func = {
    onDrop: (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      const data = e.dataTransfer.getData("text");

      if (data === "dragging") {
        setDragState(false);
        setLp();
      }
    },
  };
  return (
    <>
      {modalState("box") && (
        <div className=" w-full h-[40%] absolute z-30 left-0 bottom-0 overflow-hidden">
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
                    className=" flex justify-end items-center h-[3rem]  mr-[3rem]"
                    onClick={() => modalClose("box")}
                  >
                    <div className="h-[2.5rem] w-[2.5rem]  content-center text-center">X</div>
                  </div>
                  <div className="h-full m-[0.75rem_4.5rem]">안녕하세요</div>
                </>
              )}
              {dragState && (
                <>
                  <div
                    className=" h-full m-[0.75rem_4.5rem]"
                    ref={dropRef}
                    onDrop={(e) => func.onDrop(e)}
                    onDragOver={(e) => {
                      e.preventDefault();
                    }}
                  >
                    ICON
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
