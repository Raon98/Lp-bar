"use client";
import useSectionStore from "@/app/store/useSectionStore";
import { useEffect, useRef } from "react";
import TabSectionContainer from "../TabSectionContainer";
import PolaroidFeatures from "./PolaroidFeatures";
import PolaroidInSight from "./PolaroidInSight";
import PolaroidIntroduce from "./PolaroidIntroduce";
import PolaroidTechStack from "./PolaroidTechStack";
import PolaroidTroubles from "./PolaroidTroubles";

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

        <TabSectionContainer sectionIdx={3}>
          <PolaroidTroubles
            ref={(e) => {
              if (e) sectionRefs.current[3] = e;
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
