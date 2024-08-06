"use client";

import { cn } from "@/app/common/utils/cn";
import { useTheme } from "@/app/hooks/themeContext";
import useSectionStore from "@/app/store/useSectionStore";
import useMotionStore from "@/app/store/useStore";
import { useEffect, useState } from "react";
import VolumeSlider from "../../main/component/VolumeSlider";
import DetailHeader from "./DetailHeader";
import useLpStore from "@/app/store/useLpStore";
import Image from 'next/image'
interface DetailLayoutProps {
  children: React.ReactNode;
  id: string;
}

const ProjectDetailLayout = ({ children, id }: DetailLayoutProps) => {
  const { theme, lightTheme, darkTheme, toggleTheme } = useTheme();
  const { getTabList, setSectionActive, setTabChange ,tabChange} = useSectionStore();
  const { getLp, setLp } = useMotionStore();
  const { lpList } = useLpStore();
  const [animationMount, setAnimationMount] = useState(true);
  const [imgMount, setImgMount] = useState(false);
  const [lpMount, setLpMount] = useState(false);
  const lp = getLp();

  const func = {
    clickTab: (idx: number) => {
      if(!tabChange){
        setTabChange();
        setSectionActive(idx);
        const topHeight = getTabList()[idx].startHeight;
        window.scrollTo({ top: topHeight, behavior: "smooth" });
      }
    },
  };
  useEffect(() => {
    setAnimationMount(true);

    let filterList = lpList.filter(v=> v.key === lp.key)
    filterList?.length> 0 ? setLp(filterList[0]) : setLp(lpList[0]) 

  }, []);

  useEffect(() => {
    setLpMount(true);
    setTimeout(() => {
      setImgMount(true);
    }, 100);

    toggleTheme(lp);
  }, [lp]);

  return (
    <>
      {lpMount && (
        <>
          <DetailHeader />
          <div className={`w-full flex `}>
            <div
              className={`fixed left-0 top-0 w-full h-[23%] flex items-end justify-center z-[29] bg-white`}
            ></div>
            <div
              className={`fixed left-0 top-0 bg-${theme} w-full h-[20%] flex items-end justify-center z-30`}
            >
              <div className="w-[60%] flex">
                {getTabList(lp.exceptTab).map((v, idx) => (
                  <button
                    key={idx}
                    className={cn(
                      `tab__block bg_${lightTheme}`,
                      v.active && `text-[0.85rem !bg-white text_${darkTheme}`
                    )}
                    onClick={() => func.clickTab(v.idx)}
                  >
                    {v.tabNm}
                  </button>
                ))}
              </div>
            </div>
            <div
              className={cn(
                "fixed w-[18%]  flex justify-center items-center",
                animationMount && "animate-fadeIn"
              )}
            ></div>
            <div className="min-w-[20%]"></div>
            <div className="h-screen flex w-[60%] flex-col">
              <div className="min-h-[25%]"></div>
              <div
                className={cn(
                  "bg-white w-full  mb-[2rem] mx-6",
                  animationMount && "animate-fadeIn"
                )}
              >
                {children}
              </div>
            </div>
            <div className="min-w-[20%]"></div>
            

            <div
              className={cn(
                "fixed w-[15%] h-full flex justify-center items-center right-0 flex-col mr-12",
                animationMount && "animate-fadeIn"
              )}
            >
              <div className="w-full h-[30%] p-[2.25rem]">
                {imgMount && (
                  <div className="shadow-custom-border-2 p-3 bg-gray-rgba-0.5 rounded-md">
                    
                    <Image
                       src={`/assets/images/shadow-${lp.img}.png`}
                      width={300}
                      height={300}
                      alt="lp"
                    className="animate-lpSpin object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="w-full h-[5%]  p-5 flex justify-center">
                <VolumeSlider option="b" />
              </div>
            </div>
            <div className="min-w-[20%]"></div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectDetailLayout;
