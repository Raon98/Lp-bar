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
  const [currentIdx,setCurrentState] = useState(0)
  const lp = getLp();
  useEffect(() => {

    if(currentIdx ){
      console.log(getTabList()[currentIdx].height)
      setSectionActive(getTabList()[currentIdx].idx);      
    }

    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > getTabList()[currentIdx].height) {
          if(getTabList(lp.exceptTab).length > currentIdx ){
            setCurrentState(currentIdx+1)
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef,currentIdx]);

  return (
    <>
      {getTabList().map(
        (v) =>
          v.idx === sectionIdx && (
            <section
              className={cn(
                ` bg-slate-400 mb-20 ${className}`,
                v.active && "animate-fadeIn",
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
