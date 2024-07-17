"use client";
import useModalStore from "@/app/store/useModalStore";

const BoxModal = () => {
  const { modalState, modalClose } = useModalStore();

  return (
    <>
      {modalState("box") && (
        <div className=" w-full h-full absolute z-30 left-0 bottom-0">
          <div className="flex flex-col h-full justify-end ">
            <div className="h-[40%] backdrop-blur-xl bg-gray-rgba-0.3">
              <div
                className=" flex justify-end items-center h-[3rem] mr-[3rem]"
                onClick={() => modalClose("box")}
              >
                X
              </div>
              <div className="h-full"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BoxModal;
