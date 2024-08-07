"use client";

import { useTheme } from "@/app/hooks/themeContext";
import Link from "next/link";
import Image from 'next/image'

const DetailHeader = () => {
  const { iconTheme } = useTheme();

  return (
    <>
      <header className="backdrop-blur-xl bg-gray-rgba-0.3 h-[3.5rem] font-bold px-[2.5rem] py-[1rem] fixed translate-z-0 transition-opacity duration-300 ease-in-out w-full z-[1000] top-0 left-0">
        <div
          className={`m-[2rem_5rem] my-auto flex items-center justify-between max-w-[96.25%] h-full ${
            iconTheme === "w" ? "text-white" : "text-black"
          }`}
        >
          <div className="text-[1.15rem] flex self-start">Polariod</div>
          <Link className="flex flex-col w-[5%] justify-center items-center" href={'/main'}>
            <div className="w-[25%]">
            
               <Image
                  src={`/assets/images/close_${iconTheme}.png`}
                  width={30}
                  height={30}
                  alt="close"
                  />
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default DetailHeader;
