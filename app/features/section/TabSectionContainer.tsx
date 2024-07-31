"use client";
import { cn } from "@/app/common/utils/cn";
import useSectionStore from "@/app/store/useSectionStore";
import useMotionStore from "@/app/store/useStore";
import React, { useEffect, useRef, useState } from "react";

const TabSectionContainer = ({
  children,
  sectionIdx,
  className,
}: {
  children: React.ReactNode;
  sectionIdx: number;
  className?: string;
}) => {
  const { getTabList, setSectionActive } = useSectionStore();
  const { getLp } = useMotionStore();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [currentIdx,setCurrentState] = useState(getTabList()[0].idx)
  const lp = getLp();
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.scrollY + window.innerHeight;

        console.log("현재 스크롤값입니다." + getTabList());

        if (scrollPosition > getTabList()[currentIdx].height) {
          console.log("체인지1" + getTabList()[currentIdx].idx);
          setCurrentState(getTabList()[currentIdx].idx+1)
          console.log("체인지" + currentIdx);
          setSectionActive(currentIdx);
        }
        console.log("[currentIdx]" + currentIdx)
        console.log("getTabList()[currentIdx].idx" + getTabList()[currentIdx].idx)
        if(currentIdx !== getTabList()[0].idx && scrollPosition < getTabList()[currentIdx].height){
            
          setCurrentState(getTabList()[currentIdx].idx)
          setSectionActive(currentIdx);
          console.log("아웃체인지")
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);
  return (
    <>
      {getTabList().map(
        (v) =>
          v.idx === sectionIdx && (
            <section
              className={cn(
                ` bg-slate-400 mb-20  ${className}`,
                v.active && "animate-fadeIn",
                !v.active && "animate-fadeOut",
              )}
              key={v.idx}
              ref={sectionRef}
            >
              {children}
            </section>
          )
      )}
    </>
  );
};

export default TabSectionContainer;
