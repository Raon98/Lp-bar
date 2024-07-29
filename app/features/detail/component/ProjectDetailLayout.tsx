"use client";

import { cn } from "@/app/common/utils/cn";
import { useTheme } from "@/app/hooks/themeContext";
import useMotionStore from "@/app/store/useStore";
import { useEffect, useState } from "react";
import VolumeSlider from "../../main/component/VolumeSlider";
import DetailHeader from "./DetailHeader";

interface DetailLayoutProps {
  children: React.ReactNode;
  id: string;
}

const ProjectDetailLayout = ({ children, id }: DetailLayoutProps) => {
  const { theme, lightTheme, darkTheme } = useTheme();
  const { getLp } = useMotionStore();
  const [mount, setMount] = useState(true);
  const [imgMount, setImgMount] = useState(true);
  const lp = getLp();

  useEffect(() => {
    setMount(true);
    setImgMount(false);
    setTimeout(() => {
      setImgMount(true);
    }, 200);
    console.log(lightTheme);
  }, []);
  return (
    <>
      <DetailHeader />
      <div className={`w-full  flex overflow-y-auto`}>
        <div
          className={`absolute left-0 top-0 bg-${theme} w-full h-[20%] flex items-end justify-center z-30`}
        >
          {mount && (
            <div className="w-[60%] flex">
              <button
                className={cn(
                  `tab__block bg_${lightTheme}`,
                  `text-[0.85rem !bg-white text_${darkTheme}`
                )}
              >
                소개
              </button>
              <button className={cn(`tab__block bg_${lightTheme}`, ``)}>
                내용
              </button>
              <button className={`tab__block bg_${lightTheme}`}>기술</button>
              <button className={`tab__block bg_${lightTheme}`}>
                트러블슈팅
              </button>
            </div>
          )}
        </div>
        <div
          className={cn(
            "fixed w-[18%]  flex justify-center items-center",
            mount && "animate-fadeIn"
          )}
        ></div>
        <div className="w-[30%]"></div>
        <div className="h-screen w-full flex flex-col">
          <div className="min-h-[25%]"></div>
          <div
            className={cn(
              "bg-white w-full  mb-[2rem] mx-6 overflow-y-auto p-[1.5rem_2rem] min-h-screen",
              mount && "animate-fadeIn"
            )}
          >
            {children}
          </div>
        </div>

        <div
          className={cn(
            "fixed w-[20%] h-screen flex justify-center items-center right-0 flex-col",
            mount && "animate-fadeIn"
          )}
        >
          <div className="w-full h-[35%] p-5">
            {imgMount && (
              <div className="shadow-custom-border-2 p-3 bg-gray-rgba-0.5 rounded-md">
                <img
                  src={`/assets/images/shadow-${lp.img}.png`}
                  alt="lp"
                  className="bg-no-repeat bg-transparent bg-center object-cover w-full animate-lpSpin"
                />
              </div>
            )}
          </div>
          <div className="w-full h-[5%] mt-5 p-5 flex justify-center">
            <VolumeSlider option="b" />
          </div>
        </div>
        <div className="w-[30%]"></div>
      </div>
    </>
  );
};

export default ProjectDetailLayout;
