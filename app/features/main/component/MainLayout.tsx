"use client";

import { cn } from "@/app/common/utils/cn";
import { useState } from "react";

export default function MainLayout() {

  const [theme,setTheme] = useState('bg-matte-red')
  return (
    <>
          <div className={cn(`w-full h-full overflow-hidden relative px-8 py-5 ${theme}`,'')}>
           
          </div>
    </>
  );
}
