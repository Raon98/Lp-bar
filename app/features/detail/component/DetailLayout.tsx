"use client";

import { useTheme } from "@/app/hooks/themeContext";
import DetailHeader from "./DetailHeader";
import useMotionStore from "@/app/store/useStore";
import VolumeSlider from "../../main/component/VolumeSlider";

interface DetailLayoutProps {
  children: React.ReactNode;
}

const DetailLayout = ({ children }: DetailLayoutProps) => {
  const { theme } = useTheme();
  const { getLp } = useMotionStore();
  const lp = getLp();
  return (
    <>
      <DetailHeader />
      <div className={`w-full h-screen flex ${theme} overflow-y-auto`}>
        <div className="fixed w-[20%] h-screen flex justify-center items-center">
          목록
        </div>
        <div className="w-[30%]"></div>
        <div className="bg-white shadow-custom-border-2 w-full h-screen mt-[4.5rem] mx-6 overflow-y-auto p-[1.5rem_2rem]">
          {children}
        </div>
        <div className="fixed w-[20%] h-screen flex justify-center items-center right-0 flex-col">
          <div className="w-full h-[35%] p-5">
            <div className="shadow-custom-border-2 p-3 bg-gray-rgba-0.5 rounded-md">
              <img
                src={`/assets/images/shadow-${lp.img}.png`}
                alt="lp"
                className="bg-no-repeat bg-transparent bg-center object-cover w-full animate-lpSpin"
              />
            </div>
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
