'use client'
import { useTheme } from "@/app/hooks/themeContext";
import TabSectionContainer from "./TabSectionContainer";
import { useEffect, useRef } from "react";

const PolaroidDetail = () => {
    const { theme} = useTheme();
    const sectionRef1 = useRef<HTMLDivElement | null >(null);
    const sectionRef2 = useRef<HTMLDivElement | null >(null);
    const sectionRef3 = useRef<HTMLDivElement | null >(null);
    const sectionRef4 = useRef<HTMLDivElement | null >(null);
    const sectionRef5 = useRef<HTMLDivElement | null >(null);


    useEffect(()=>{
      console.log("실행" + sectionRef1.current)
  
        if(sectionRef1.current){
          console.log(sectionRef1.current.getBoundingClientRect())

          const rect = sectionRef1.current.getBoundingClientRect();
          const elementBottom = rect.bottom + window.scrollY; 
  
  
          console.log("바텀값1입니다." + elementBottom)
  
    
      }
  
      if(sectionRef2.current){
        console.log(sectionRef2.current.getBoundingClientRect())

        const rect = sectionRef2.current.getBoundingClientRect();
        const elementBottom = rect.bottom + window.scrollY; 


        console.log("바텀값2입니다." + elementBottom)

      }
  
    },[])

  return (
    <>
      <div className="w-full">
        <TabSectionContainer sectionIdx={1} >
          <div className="flex flex-col text-[5rem] min-h-[500px]" ref={sectionRef1}>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
            <div>소개화면입니다.</div>
          </div></TabSectionContainer>
        <TabSectionContainer sectionIdx={2}><div className="min-h-[700px] " ref={sectionRef2}>기능화면입니다.</div></TabSectionContainer>
        <TabSectionContainer sectionIdx={3}>기술화면입니다.</TabSectionContainer>
        <TabSectionContainer sectionIdx={4}>트러블슈팅화면입니다.</TabSectionContainer>
        <TabSectionContainer sectionIdx={5}>인사이트화면입니다.</TabSectionContainer>
      </div>
    </>
  );
};

export default PolaroidDetail;
