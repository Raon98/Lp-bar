"use client";

import { cn } from "@/app/common/utils/cn";
import { useState } from "react";

export default function MainLayout() {
  const [theme, setTheme] = useState("bg-matte-red");
  return (
    <>
      <div
        className={cn(
          `w-full h-full overflow-hidden relative px-8 py-5 ${theme}`,
          ""
        )}
      >
        <div className="flex w-full h-screen">
          <div className="w-[70%]">
            <div className="sr-only">레코드판</div>

            <div className="w-full h-full flex items-center justify-center">
              <div className="relative">
                <img
                  src="/assets/images/turnTable.png"
                  alt="recode"
                  className="bg-no-repeat bg-transparent bg-center object-cover w-full"
                ></img>
                <span className="before:absolute before:top-0 before:right-0 before:content-[' '] before:bg-[url('/assets/images/toneArm.png')] before:bg-center before:bg-no-repeat before:w-[20%] before:h-full before:transform before:translate-x-[-100%] before:translate-y-[-10%] before:bg-contain"></span>
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="sr-only">Lp판</div>
          </div>
        </div>
      </div>
    </>
  );
}
