"use client";

import { cn } from "@/app/common/utils/cn";
import { useTheme } from "@/app/hooks/themeContext";
import useMotionStore from "@/app/store/useStore";
import { useEffect, useState } from "react";
import VolumeSlider from "../../main/component/VolumeSlider";
import DetailHeader from "./DetailHeader";
import Image from 'next/image'

interface DetailLayoutProps {
  children: React.ReactNode;
  id: string;
}

const DetailLayout = ({ children, id }: DetailLayoutProps) => {
  const { theme, toggleTheme } = useTheme();
  const { getLp } = useMotionStore();
  const [mount, setMount] = useState(false);
  const lp = getLp();

  useEffect(() => {
    toggleTheme(lp);
    setMount(true)
  }, []);
  return (
    <>
      <DetailHeader />
      {mount && (
        <div className={`w-full  flex bg-${theme} overflow-y-auto`}>
          <div
            className={cn(
              "fixed w-[18%]  flex justify-center items-center",
              mount && "animate-fadeIn"
            )}
          >
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
            <div className=" p-5">
                <div className="shadow-custom-border-2 p-3 bg-gray-rgba-0.5 rounded-md">
                      <Image
                            src={`/assets/images/shadow-${lp.img}.png`}
                            width={200}
                            height={200}
                            alt="lpBoard"
                         
                            className={cn('animate-lpSpin')}
                           />
                </div>
            </div>
            <div className="w-full h-[5%] mt-5 p-5 flex justify-center">
              <VolumeSlider />
            </div>
          </div>
          <div className="w-[30%]"></div>
        </div>
      )}
    </>
  );
};

export default DetailLayout;
