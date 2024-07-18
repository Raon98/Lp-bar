"use client";
import { cn } from "@/app/common/utils/cn";
import useModalStore from "@/app/store/useModalStore";

const BoxModal = () => {
  const { modalState, modalClose } = useModalStore();

  return (
    <>
      {modalState("box") && (
        <div className=" w-full h-[40%] absolute z-30 left-0 bottom-0 overflow-hidden">
          <div className="flex flex-col h-full justify-end ">
            <div className={cn("h-0 backdrop-blur-xl bg-gray-rgba-0.3",
              modalState("box") && "animate-boxOpen"
            )}>
              <div
                className=" flex justify-end items-center h-[3rem] mr-[3rem]"
                onClick={() => modalClose("box")}
              >
                X
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BoxModal;
