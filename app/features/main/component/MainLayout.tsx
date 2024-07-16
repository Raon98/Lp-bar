"use client";
import { cn } from "@/app/common/utils/cn";
import useMotionStore from "@/app/store/useMotionStore";
import { useEffect, useRef, useState } from "react";

export default function MainLayout() {
  const { getState, setState } = useMotionStore();
  const [theme, setTheme] = useState("bg-matte-red");
  const [mount, setMount] = useState(false);
  const soundIcon = "play_w";
  const boxIcon = "storageBox_w";

  const lpRef = useRef<HTMLDivElement | null>(null);
  const dropRef = useRef<HTMLButtonElement | null>(null);

  const func = {
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => {
      console.log("drag start");
      e.dataTransfer.setData("text/plain", "dragging");
    },
    onDrop: (e: React.DragEvent<HTMLButtonElement>) => {
      e.preventDefault();
      
      const data = e.dataTransfer.getData("text");
      if (data === "dragging") {
        console.log("drop");
      }
    }
  };

  useEffect(() => {
    if (!mount) {
      setMount(true);
    }
  }, []);

  return (
    <>
      {mount && (
        <>
          <div
            className={cn(
              `w-full h-full overflow-hidden relative px-8 py-5 ${theme}`,
              ""
            )}
          >
            <div className="flex w-full h-screen">
              <div className="sr-only">레코드판</div>

              <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-[55%] animate-fadeIn">
                  <img
                    src="/assets/images/turnTable.png"
                    alt="recode"
                    className="bg-no-repeat bg-transparent bg-center object-cover w-full"
                  />
                  <span className="before:absolute before:top-0 before:right-0 before:content-[' '] before:bg-[url('/assets/images/toneArm.png')] before:bg-center before:bg-no-repeat before:w-[20%] before:h-full before:transform before:translate-x-[-120%] before:translate-y-[-15%] before:bg-contain"></span>

                  <div
                    className="absolute left-[19%] top-[26%] w-[45%] hover:cursor-pointer drag_item"
                    draggable={true}
                    ref={lpRef}
                    onDragStart={(e) => func.onDragStart(e)}
                  >
                    <img
                      src="/assets/images/doc_lp1.png"
                      alt="lp"
                      className="bg-no-repeat bg-transparent bg-center object-cover w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-transparent font-bold px-[3.5rem] py-[1rem] fixed  w-full z-[1000] bottom-0 left-0">
            <div className="mx-[2rem] mb-[3rem] my-auto flex items-end justify-between text-white ">
              <button
                className="rounded_block">
                <img
                  src={`/assets/images/${soundIcon}.png`}
                  alt="soundIcon"
                  className="bg-no-repeat bg-transparent bg-center object-cover w-2/3"
                />
              </button>
              <button
                className="rounded_block"
                ref={dropRef}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onDrop={(e) => func.onDrop(e)}
              >
                <img
                  src={`/assets/images/${boxIcon}.png`}
                  alt="soundIcon"
                  className="bg-no-repeat bg-transparent bg-center object-cover w-1/2"
                />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
