"use client";
import useSectionStore from "@/app/store/useSectionStore";
import { useEffect, useRef } from "react";
import TabSectionContainer from "../../section/TabSectionContainer";
import PolaroidFeatures from "../../section/polaroid/PolaroidFeatures";
import PolaroidInSight from "../../section/polaroid/PolaroidInSight";
import PolaroidIntroduce from "../../section/polaroid/PolaroidIntroduce";
import PolaroidTechStack from "../../section/polaroid/PolaroidTechStack";

const PolaroidDetail = () => {
  const { getTabList, setSectionHeight, setInitTab } = useSectionStore();
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setInitTab(() => {
      if (sectionRefs.current) {
        const firstTop = sectionRefs.current[0].getBoundingClientRect().top;

        sectionRefs.current.forEach((ref, idx) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();

            const elBottom = rect.bottom + window.scrollY;
            const elTop = ref.offsetTop - firstTop;
            setSectionHeight(idx, elTop, elBottom);
          }
        });
      }
      console.log(getTabList());
    });
  }, []);

  return (
    <>
      <div className="w-full">
        <TabSectionContainer sectionIdx={0}>
          <PolaroidIntroduce
            ref={(e) => {
              if (e) sectionRefs.current[0] = e;
            }}
          />
        </TabSectionContainer>

        <TabSectionContainer sectionIdx={1}>
          <PolaroidFeatures
            ref={(e) => {
              if (e) sectionRefs.current[1] = e;
            }}
          />
        </TabSectionContainer>

        <TabSectionContainer sectionIdx={2}>
          <PolaroidTechStack
            ref={(e) => {
              if (e) sectionRefs.current[2] = e;
            }}
          />
        </TabSectionContainer>

        <TabSectionContainer sectionIdx={4}>
          <PolaroidInSight
            ref={(e) => {
              if (e) sectionRefs.current[4] = e;
            }}
          />
        </TabSectionContainer>
      </div>
    </>
  );
};

export default PolaroidDetail;
