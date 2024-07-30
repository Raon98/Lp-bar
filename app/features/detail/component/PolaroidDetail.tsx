"use client";
import { useTheme } from "@/app/hooks/themeContext";
import useSectionStore from "@/app/store/useSectionStore";
import { useEffect, useRef } from "react";
import TabSectionContainer from "./TabSectionContainer";

const PolaroidDetail = () => {
  const { theme } = useTheme();
  const { getTabList, setSectionHeight } = useSectionStore();
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (sectionRefs.current) {
      sectionRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elBottom = rect.bottom + window.scrollY;
          setSectionHeight(idx + 1, elBottom);

          console.log(idx + "번 : " + elBottom);
        }
      });
      console.log(getTabList());
    }
  }, []);

  return (
    <>
      <div className="w-full">
        <TabSectionContainer sectionIdx={1}>
          <div
            className="flex flex-col text-[5rem] min-h-[500px]"
            ref={(e) => {
              if (e) sectionRefs.current[0] = e;
            }}
          >
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
          </div>
        </TabSectionContainer>
        <TabSectionContainer sectionIdx={2}>
          <div
            className="min-h-[700px] "
            ref={(e) => {
              if (e) sectionRefs.current[1] = e;
            }}
          >
            기능화면입니다.
          </div>
        </TabSectionContainer>
        <TabSectionContainer sectionIdx={3}>
          <div
            className="min-h-[700px] "
            ref={(e) => {
              if (e) sectionRefs.current[2] = e;
            }}
          >
            기술화면입니다.
          </div>
        </TabSectionContainer>
        <TabSectionContainer sectionIdx={4}>
          <div
            className="min-h-[700px] "
            ref={(e) => {
              if (e) sectionRefs.current[3] = e;
            }}
          >
            트러블슈팅화면입니다.
          </div>
        </TabSectionContainer>
        <TabSectionContainer sectionIdx={5}>
          <div
            className="min-h-[700px] "
            ref={(e) => {
              if (e) sectionRefs.current[4] = e;
            }}
          >
            인사이트화면입니다.
          </div>
        </TabSectionContainer>
      </div>
    </>
  );
};

export default PolaroidDetail;
