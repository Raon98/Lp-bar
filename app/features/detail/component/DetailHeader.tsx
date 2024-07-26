"use client";

import { useTheme } from "@/app/hooks/themeContext";

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
          <div className="text-[1.25rem] flex self-start">Polariod</div>
          <button className="flex flex-col w-[5%] justify-center items-center">
            <div className="w-[35%]">
              <img
                src={`/assets/images/stop_${iconTheme}.png`}
                alt="soundIcon"
                className="bg-no-repeat bg-transparent bg-center object-cover"
              />
         
            </div>
            <div className="text-[0.75rem]">CLOSE</div>
          </button>
        </div>
      </header>
    </>
  );
};

export default DetailHeader;
