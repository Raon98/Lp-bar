"use client";
import useSectionStore from "@/app/store/useSectionStore";
import { useEffect, useRef } from "react";
import TabSectionContainer from "../../section/TabSectionContainer";
import AccompanyFeatures from "../../section/accompany/AccompanyFeatures";
import AccompanyIntroduce from "../../section/accompany/AccompanyIntroduce";
import AccompanySight from "../../section/accompany/AccompanySight";
import AccompanyTechStack from "../../section/accompany/AccompanyTechStack";
import AccompanyTroubles from "../../section/accompany/AccompanyTroubles";

const AccompanyDetail = () => {
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
          <AccompanyIntroduce
            ref={(e) => {
              if (e) sectionRefs.current[0] = e;
            }}
          />
        </TabSectionContainer>

        <TabSectionContainer sectionIdx={1}>
          <AccompanyFeatures
            ref={(e) => {
              if (e) sectionRefs.current[1] = e;
            }}
          />
        </TabSectionContainer>

        <TabSectionContainer sectionIdx={2}>
          <AccompanyTechStack
            ref={(e) => {
              if (e) sectionRefs.current[2] = e;
            }}
          />
        </TabSectionContainer>

        <TabSectionContainer sectionIdx={3}>
          <AccompanyTroubles
            ref={(e) => {
              if (e) sectionRefs.current[3] = e;
            }}
          />
        </TabSectionContainer>

        <TabSectionContainer sectionIdx={4}>
          <AccompanySight
            ref={(e) => {
              if (e) sectionRefs.current[4] = e;
            }}
          />
        </TabSectionContainer>
      </div>
    </>
  );
};

export default AccompanyDetail;
