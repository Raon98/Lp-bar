"use client";
import { cn } from "@/app/common/utils/cn";
import useTabStore from "@/app/store/useTabStore";
import React, { useEffect, useRef } from "react";

const TabSectionContainer = ({
  children,
  sectionIdx,
  className,
  ref
}: {
  children: React.ReactNode;
  sectionIdx: number;
  className?: string;
  ref? : HTMLElement | null
}) => {
  const { getTabList, setTabActive } = useTabStore();
  const sectionRef1 = useRef<HTMLElement | null >(null);
  const sectionRef2 = useRef<HTMLElement | null >(null);
  const sectionRef3 = useRef<HTMLElement | null >(null);
  const sectionRef4 = useRef<HTMLElement | null >(null);
  const sectionRef5 = useRef<HTMLElement | null >(null);
  
  useEffect(()=>{
    console.log("실행" + sectionRef1.current)
    const handleScroll = () => {

      if(sectionRef1.current){
        console.log(sectionRef1.current.getBoundingClientRect())

        const rect = sectionRef1.current.getBoundingClientRect();
        const elementBottom = rect.bottom + window.scrollY; 
        const scrollPosition = window.scrollY + window.innerHeight; 


        console.log("바텀값입니다." + elementBottom)
        console.log("현재 스크롤값입니다." + scrollPosition)

        if(scrollPosition > 2400){
          console.log("체인지")
          setTabActive(2)

        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  },[sectionRef1])
  return (
    <>
      {getTabList().map(
        (v) => v.idx === sectionIdx && <section className={cn(` bg-slate-400 mb-20 opacity-0 ${className}`,v.active && 'animate-fadeIn')}  key={v.idx} ref={sectionRef1}>{children}</section>
      )}
{/* { sectionIdx === 1 && <section className={cn(` bg-slate-400 mb-20 opacity-0 animate-fadeIn`)} ref={sectionRef1}>{children}</section>}
{ sectionIdx === 2 && <section className={cn(` bg-slate-400 mb-20 opacity-0 animate-fadeIn`)} ref={sectionRef2}>{children}</section>}
{ sectionIdx === 3 && <section className={cn(` bg-slate-400 mb-20 opacity-0 animate-fadeIn`)} ref={sectionRef3}>{children}</section>}
{ sectionIdx === 4 && <section className={cn(` bg-slate-400 mb-20 opacity-0 animate-fadeIn`)} ref={sectionRef4}>{children}</section>}
{ sectionIdx === 5 && <section className={cn(` bg-slate-400 mb-20 opacity-0 animate-fadeIn`)} ref={sectionRef5}>{children}</section>} */}

    </>
  );
};

export default TabSectionContainer;
