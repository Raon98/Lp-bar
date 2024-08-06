"use client";
import { Modals } from "@/app/common/component/Modals";
import { cn } from "@/app/common/utils/cn";
import { useTheme } from "@/app/hooks/themeContext";
import useDragStore from "@/app/store/useDragStore";
import useLpStore, { LpStateProp } from "@/app/store/useLpStore";
import useModalStore from "@/app/store/useModalStore";
import useSectionStore from "@/app/store/useSectionStore";
import useMotionStore from "@/app/store/useStore";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function MainLayout() {
  const { theme, iconTheme, toggleTheme } = useTheme();
  const { getState, setChangeState, getLp, setLp, setState, LpAnimationSwitch } =
    useMotionStore();
  const { setInitTab } = useSectionStore();
  const { modalState, modalOpen, modalClose } = useModalStore();
  const { setDragState } = useDragStore();
  const { lpList } = useLpStore()
  const router = useRouter();

  const play = getState("main", "play");
  const box = modalState("box");
  const lpSwitch = getState("main", "lpSwitch");
  const lp = getLp();

  const lpRef = useRef<HTMLDivElement | null>(null);
  const [spinHover, setSpinHover] = useState(true);
  const [lpSpin, setLpSpin] = useState(false);
  const [imgMount, setImgMount] = useState(true);
  const [mount, setMount] = useState(false);
  // const [filterList, setFilterList] = useState<LpStateProp[]>([])
  const func = {
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData("text/plain", "dragging");
      setSpinHover(false);
      setDragState(true);
      modalOpen("box");
    },
    recodePlay: () => {
      if (lp.key === "") {
        toast.info("LP판이 비어있어요!", { autoClose: 3000 });
        modalOpen("box");
      } else {
        if (!play) {
          setChangeState("main", "play");

          setTimeout(() => {
            setLpSpin(true);
          }, 500);
          setTimeout(() => {
            router.push(`/detail/${lp.idx}`);
          }, 2500);
        }
      }
    },
    openBox: () => {
      modalOpen("box");
    },
  };

  useEffect(() => {
    if (lp.key) {
      setImgMount(false);
      setMount(true);
      LpAnimationSwitch();
      setTimeout(() => {
        setImgMount(true);
      }, 100);

    }
    toggleTheme(lp);
  }, [lp]);

  useEffect(() => {
    setImgMount(false);
    setTimeout(() => {
      setImgMount(true);
    }, 100);
    setState("main", "play", false);
    /*20240730 tab초기화 */
    setInitTab();

    let filterList = lpList.filter(v=> v.key === lp.key)
    filterList?.length> 0 ? setLp(filterList[0]) : setLp(lpList[0]) 


  }, []);

  return (
    <>
      {!mount && (
        <div
          className={cn(
            `w-full h-full overflow-hidden relative px-8 py-5 bg-${theme}`,
            ""
          )}
        ></div>
      )}

      {mount && (
        <>
          <div
            className={cn(
              `w-full h-full overflow-hidden relative px-8 py-5 bg-${theme}`,
              ""
            )}
            onClick={() => {
              box && modalClose("box");
            }}
          >
            <div className="flex w-full h-screen relative">
              <div className="sr-only">레코드판</div>

              <div
                className={`text-[6.75rem] font-['DIGI'] mt-[4.25rem] mr-[6.75rem] absolute right-0 top-0 ${
                  iconTheme === "w" ? "text-white" : "text-black"
                }`}
              >
                {lp.since}
              </div>
              <div className="w-full h-full flex items-center justify-center ">
                {imgMount && <div className="relative w-[55%] animate-fadeIn x-1100:w-[60%] x-750:w-[70%]">
                  <img
                    src="/assets/images/turnTable.png"
                    alt="recode"
                    className="bg-no-repeat bg-transparent bg-center object-cover w-full"
                  />
                  <span
                    className={cn(
                      `before:z-[60] before:absolute before:top-0 before:right-0 before:content-[' '] before:bg-[url('/assets/images/toneArm.png')] before:bg-center before:bg-no-repeat before:w-[20%] before:h-full before:transform before:translate-x-[-120%] before:translate-y-[-15%] before:bg-contain`,
                      play && "before:animate-mainArmSpin"
                    )}
                  ></span>
                  {lp.key &&  (
                    <div
                      className={cn(
                        "absolute left-[19%] top-[26%] w-[45%] hover:cursor-pointer drag_item z-20",
                        lpSwitch && "animate-lpSwitch",
                        spinHover && "hover:animate-lpSpin",
                        lpSpin && "animate-lpSpin"
                      )}
                      draggable={true}
                      ref={lpRef}
                      onDragStart={(e) => func.onDragStart(e)}
                      onDragEnd={() => {
                        setSpinHover(true);
                        setDragState(false);
                      }}
                    >
                      <img
                        src={`/assets/images/${lp.img}.png`}
                        alt="lp"
                        className="bg-no-repeat bg-transparent bg-center object-cover w-full"
                      />
                    </div>
                  )}
                </div>}
              </div>
            </div>
          </div>
          <div className="bg-transparent font-bold px-[3.5rem] py-[1rem] fixed  w-full z-[20] bottom-0 left-0">
            <div className="mx-[2rem] mb-[3rem] my-auto flex items-end justify-between text-white ">
              <button
                className="rounded_block"
                onClick={() => func.recodePlay()}
              >
                <img
                  src={`/assets/images/play_${iconTheme}.png`}
                  alt="soundIcon"
                  className="bg-no-repeat bg-transparent bg-center object-cover w-2/3"
                />
              </button>
              <button className="rounded_block" onClick={() => func.openBox()}>
                <img
                  src={`/assets/images/openBox_${iconTheme}.png`}
                  alt="boxIcon"
                  className={cn(
                    `bg-no-repeat bg-transparent bg-center object-cover w-[80%]`
                  )}
                />
              </button>
            </div>
          </div>
        </>
      )}
      <Modals />
    </>
  );
}
