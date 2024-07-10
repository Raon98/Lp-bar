"use client";
import { useState } from "react";

const Header = () => {
  const [since, setSince] = useState<String>("1998");
  const soundIcon = "soundOn_w";
  return (
    <>
      <header className="bg-transparent  mt-[1.25rem] font-bold px-[3.5rem] py-[1rem] fixed w-full z-[1000] top-0 left-0">
        {/* <header className="backdrop-blur-xl bg-gray-rgba-0.3 h-[3.5rem] font-bold px-[2.5rem] py-[1rem] fixed translate-z-0 transition-opacity duration-300 ease-in-out w-full z-[1000] top-0 left-0"> */}
        <div className="mx-[2rem_5rem] my-auto flex items-center justify-between text-white  max-w-[82.25rem]">
          <div className="text-[1.75rem] flex self-start">Polariod</div>
          <div className="flex flex-col">
            <button className="flex justify-end">
              <img
                src={`/assets/images/${soundIcon}.png`}
                alt="soundIcon"
                className="bg-no-repeat bg-transparent bg-center object-cover w-[15%] "
              ></img>
            </button>
            <div className="text-[5.75rem] font-['DIGI'] mt-[1rem] mr-[1.75rem]">
              {since}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
