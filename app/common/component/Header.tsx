"use client";

import VolumeSlider from "@/app/features/main/component/VolumeSlider";
import { useTheme } from "@/app/hooks/themeContext";
import useStore from "@/app/store/useStore";
import useMotionStore from "@/app/store/useStore";
import Link from "next/link";

const Header = () => {
  const { getLp } = useMotionStore();
  const { iconTheme } = useTheme();
  const {resetState } = useStore()
  const lp = getLp();


  return (
    <>
      <header className="bg-transparent  mt-[1.25rem] font-bold px-[3.5rem] py-[1rem] fixed w-full z-[1000] top-0 left-0">
        <div className={`mx-[2rem_5rem] my-auto flex items-center justify-between max-w-[96.25%] ${iconTheme ==='w' ? 'text-white' :'text-black'}`}>
          <Link href={"/"} className="text-[1.75rem] flex self-start" onClick={()=> resetState()}>Polariod</Link>
          <div className="flex flex-col">
            {lp.key !== '' && <VolumeSlider/>}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
