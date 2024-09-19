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
import Image from 'next/image'
export default function MainLayout() {
  const { theme, iconTheme, toggleTheme } = useTheme();
  const { getState, setChangeState, getLp, setLp, setState, LpAnimationSwitch } =
    useMotionStore();
  const lp = getLp();

  const { setInitTab } = useSectionStore();
  const { modalState, modalOpen, modalClose } = useModalStore();
  const { setDragState } = useDragStore();
  const { lpList } = useLpStore()
  const router = useRouter();

  const play = getState("main", "play");
  const box = modalState("box");
  const lpSwitch = getState("main", "lpSwitch");
  
  const lpRef = useRef<HTMLDivElement | null>(null);
  const [spinHover, setSpinHover] = useState(true);
  const [lpSpin, setLpSpin] = useState(false);

  const [imgMount,setImgMount] = useState(false)
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
      LpAnimationSwitch();
      setImgMount(false)
      setTimeout(()=> {
        setImgMount(true)
      },100)
    }
    toggleTheme(lp);
  }, [lp]);

  useEffect(() => {
    setState("main", "play", false);
    /*20240730 tab초기화 */
    setInitTab();

    let filterList = lpList.filter(v=> v.key === lp.key)
    filterList?.length> 0 ? setLp(filterList[0]) : setLp(lpList[0]) 


  }, []);

  return (
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
                {<div className="relative w-[45%] animate-fadeIn x-1100:w-[50%] x-750:w-[60%]">
                    <Image
                      src="/assets/images/turnTable.png"
                      width={400}
                      height={100}
                      alt="recode"
                      priority
                      className="w-full h-full"
                    />
            
                  <div className={cn('absolute z-[60] top-0 right-0  w-[25%] transform translate-x-[-80%] translate-y-[55%]',
                    play && "animate-mainArmSpin"
                  )}>
                  <Image
                      src={`/assets/images/toneArm.png`}
                      width={100}
                      height={100}
                      alt="soundIcon"
                      className="w-[80%]"
                    />
                  </div>
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
                    {imgMount && <Image
                      src={`/assets/images/${lp.img}.png`}
                      width={200}
                      height={100}
                      alt="lp"
                      className="w-full h-full"
                      
                    />}
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
                <Image
                      src={`/assets/images/play_${iconTheme}.png`}
                      width={50}
                      height={50}
                      alt="soundIcon"
                      className="w-[80%]"
                    
                    />

              </button>
              <button className="rounded_block" onClick={() => func.openBox()}>
                <Image
                      src={`/assets/images/openBox_${iconTheme}.png`}
                      width={50}
                      height={50}
                      alt="soundIcon"
                      className="w-[80%]"
                    
                    />
              </button>
            </div>
          </div>
      <Modals />
      </>

)}
