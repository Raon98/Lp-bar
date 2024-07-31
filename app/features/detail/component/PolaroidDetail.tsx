"use client";
import { useTheme } from "@/app/hooks/themeContext";
import useSectionStore from "@/app/store/useSectionStore";
import { useEffect, useRef } from "react";
import TabSectionContainer from "../../section/TabSectionContainer";
import PolaroidIntroduce from "../../section/polaroid/PolaroidIntroduce";
import PolaroidFeatures from "../../section/polaroid/PolaroidFeatures";
import PolaroidTechStack from "../../section/polaroid/PolaroidTechStack";
import PolaroidInSight from "../../section/polaroid/PolaroidInSight";

const PolaroidDetail = () => {
  const { theme } = useTheme();
  const { getTabList, setSectionHeight,setInitTab } = useSectionStore();
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setInitTab(()=> {
      console.log("초기화완료")

      if (sectionRefs.current) {
        sectionRefs.current.forEach((ref, idx) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const elBottom = rect.bottom + window.scrollY;
            setSectionHeight(idx, elBottom);
          }
        });
      }
      console.log(getTabList())
    });
 

  }, []);

  return (
    <>
      <div className="w-full">
        <TabSectionContainer sectionIdx={0}>
          <PolaroidIntroduce ref={(e) => { if (e) sectionRefs.current[0] = e;}}/>
        </TabSectionContainer>

        <TabSectionContainer sectionIdx={1}>
          <PolaroidFeatures ref={(e) => { if (e) sectionRefs.current[1] = e;}}/>
        </TabSectionContainer>

        <TabSectionContainer sectionIdx={2}>
          <PolaroidTechStack ref={(e) => { if (e) sectionRefs.current[2] = e;}}/>
          </TabSectionContainer>

        <TabSectionContainer sectionIdx={4}>
          <PolaroidInSight ref={(e) => { if (e) sectionRefs.current[4] = e;}}/>
        </TabSectionContainer>
      </div>
    </>
  );
};

export default PolaroidDetail;
