"use client";

import { cn } from "@/app/common/utils/cn";
import { useState } from "react";

export default function MainLayout() {
  /* purple: '#8748E1',green: '#65D35D', red: '#EF6363',skyblue: '#87CEEB',yellow: '#FFD700',
   */
  const [theme, setTheme] = useState("bg-matte-green");

  return (
    <>
      <div
        className={cn(
          `w-full h-full overflow-hidden relative px-8 py-5 ${theme}`,
          ""
        )}
      >
        <div className="flex w-full h-screen">
          <div className="sr-only">레코드판</div>

          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-[55%]  ">
              <img
                src="/assets/images/turnTable.png"
                alt="recode"
                className="bg-no-repeat bg-transparent bg-center object-cover w-full"
              ></img>
              <span className="before:absolute before:top-0 before:right-0 before:content-[' '] before:bg-[url('/assets/images/toneArm.png')] before:bg-center before:bg-no-repeat before:w-[20%] before:h-full before:transform before:translate-x-[-120%] before:translate-y-[-15%] before:bg-contain"></span>
              <div className="absolute left-[19%] top-[26%] w-[45%]">
                <img
                  src="/assets/images/redLp.png"
                  alt="lp"
                  className="bg-no-repeat bg-transparent bg-center object-cover w-full"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
