"use client";
import useMotionStore from "@/app/store/useMotionStore";
import { useState } from "react";

const Header = () => {

  const {getState,setChangeState} = useMotionStore()
  
  return (
    <>
      <header className="bg-transparent  mt-[1.25rem] font-bold px-[3.5rem] py-[1rem] fixed w-full z-[1000] top-0 left-0">
        {/* <header className="backdrop-blur-xl bg-gray-rgba-0.3 h-[3.5rem] font-bold px-[2.5rem] py-[1rem] fixed translate-z-0 transition-opacity duration-300 ease-in-out w-full z-[1000] top-0 left-0"> */}
        <div className="mx-[2rem_5rem] my-auto flex items-center justify-between text-white  max-w-[96.25%]">
          <div className="text-[1.75rem] flex self-start">Polariod</div>
          <div className="flex flex-col">
            <button className="flex justify-end" onClick={()=>setChangeState('main','sound')}>
              <img
                src={`/assets/images/${getState('main','sound') ? "soundOn_w" : "soundMute_w"}.png`}
                alt="soundIcon"
                className="bg-no-repeat bg-transparent bg-center object-cover w-[15%] "
              ></img>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
