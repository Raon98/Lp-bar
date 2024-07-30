"use client";
import { cn } from "@/app/common/utils/cn";
import useSectionStore from "@/app/store/useSectionStore";

import React, { useEffect, useRef } from "react";

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
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    console.log("실행" + sectionRef.current);
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.scrollY + window.innerHeight;

        console.log("현재 스크롤값입니다." + scrollPosition);

        if (scrollPosition > 2400) {
          console.log("체인지");
          // setSectionActive(2);
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
                v.active && "animate-fadeIn"
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
