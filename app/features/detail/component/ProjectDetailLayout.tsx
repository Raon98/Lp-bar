"use client";

import { cn } from "@/app/common/utils/cn";
import { useTheme } from "@/app/hooks/themeContext";
import useMotionStore from "@/app/store/useStore";
import { useEffect, useState } from "react";
import IndexComponent from "../../index/component/IndexComponent";
import VolumeSlider from "../../main/component/VolumeSlider";
import DetailHeader from "./DetailHeader";

interface DetailLayoutProps {
  children: React.ReactNode;
  id: string;
}

const ProjectDetailLayout = ({ children, id }: DetailLayoutProps) => {
  const { theme, textTheme } = useTheme();
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

    console.log(textTheme);
  }, []);
  return (
    <>
      <DetailHeader />
      <div className={`w-full  flex overflow-y-auto`}>
        <div
          className={`absolute left-0 top-0 ${theme} w-full h-[20%] flex items-end justify-center z-30`}
        >
          <div className="w-[80%] flex gap-x-1">
            <div className={`tab_item !bg-white !${textTheme} !text-[1rem]`}>
              소개
            </div>
            <div className="tab_item">내용</div>
            <div className="tab_item">기술</div>
            <div className="tab_item">트러블슈팅</div>
          </div>
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
            <VolumeSlider />
          </div>
        </div>
        <div className="w-[30%]"></div>
      </div>
    </>
  );
};

export default ProjectDetailLayout;
