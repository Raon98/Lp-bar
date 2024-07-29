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

const DetailLayout = ({ children, id }: DetailLayoutProps) => {
  const { theme } = useTheme();
  const { getLp } = useMotionStore();
  const [mount, setMount] = useState(false);
  const [imgMount, setImgMount] = useState(true);
  const lp = getLp();

  useEffect(() => {
    setMount(true);
    setImgMount(false);
    setTimeout(() => {
      setImgMount(true);
    }, 200);
  }, []);
  return (
    <>
      <DetailHeader />
      <div className={`w-full  flex bg-${theme} overflow-y-auto`}>
        <div
          className={cn(
            "fixed w-[18%]  flex justify-center items-center",
            mount && "animate-fadeIn"
          )}
        >
          <div className="px-5 w-full">
            <IndexComponent id={id} />
          </div>
        </div>
        <div className="w-[30%]"></div>
        <div
          className={cn(
            "bg-white shadow-custom-border-2 w-full  mt-[4.5rem] mb-[2rem] mx-6 overflow-y-auto p-[1.5rem_2rem] min-h-screen",
            mount && "animate-fadeIn"
          )}
        >
          {children}
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

export default DetailLayout;
