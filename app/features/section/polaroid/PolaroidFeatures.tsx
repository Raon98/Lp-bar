import { forwardRef } from "react";

const PolaroidFeatures = forwardRef<HTMLDivElement>((_, sectionRefs) => {
  return (
    <div className="flex flex-col" ref={sectionRefs}>
      <div className="text-[1.125rem]"># 전역 상태관리</div>
      <div className="text-[rgba(0,0,0,0.7)]">
        · 이 프로젝트를 설계할때 제일 중요하게 생각했던부분은 확장성이였습니다.
      </div>
      <div className="text-[rgba(0,0,0,0.7)]">
        · 앞으로의 프로젝트를 늘려 나가면서 프로젝트들을 해당 프로젝트에
        추가시키기것이 목적이였기 때문에 단순히 하드코딩으로 컴포넌트를
        구성하는건 비효율적이라 생각하였고 공통 컴포넌트 및 Zustand를 사용한
        전역상태관리의 역할이 핵심이였습니다.
      </div>
      <div className="mt-2">
        예시로 useSectionStore라는 Store는 상태관리 공간이 있고 이 공간은 현재
        보이는 상세페이지의 탭을 전역으로 구성하고 있습니다.
      </div>
      <div className="flex-col flex text-[rgba(0,0,0,0.7)] mt-4 mb-4">
        <div className="w-full border border-solid p-4 rounded-md bg-[rgba(255,255,255,0.95)] text-[0.875rem]">
          <div>... useSectionStore</div>
          <div>
            {`export const initTab = 
                [{idx : 0 , tabNm : 'introduce', active : true, screenActive : true, startHeight : 0,endHeight : 0},
                {idx : 1 , tabNm : 'Features',active : false,screenActive : false, startHeight : 0,endHeight : 0},
                {idx : 2 , tabNm : 'Tech Stack',active : false,screenActive : false, startHeight : 0,endHeight : 0},
                {idx : 3 , tabNm : 'Troubles',active : false,screenActive : false, startHeight : 0,endHeight : 0},
                {idx : 4 , tabNm : 'Insight',active : false,screenActive : false, startHeight : 0,endHeight : 0}
                ]`}
          </div>
        </div>
      </div>
      <div>
        여기서 탭은 [소개,기능,기술,트러블슈팅,인사이트] 등 총 5개의 기본 탭으로
        구성되어있지만 프로젝트마다 필요하지않은 탭구성이 있을수도있고
        추가적으로 필요한 탭이 생겨날 수도 있습니다.
      </div>
      <div className="mt-2">
        또한 탭은 특정 프로젝트의 공간이 생겨날때마다 새롭게 코드를 생성하기보단
        기존 코드를 컴포넌트화해서 재사용을 할 수 있게 구성하는게 목표였습니다.
      </div>

      <div className="mt-4">
        그리하여 탭 상태를 전역으로 구성한후 프로젝트의 부모 Detail 컴포넌트(
        <span>PolaroidDetail</span>)에서 컴포넌트화한 필요한 탭 구성만 Ref로
        <span>TabSectionContainer</span>로 넘겨주었고
      </div>

      <div className="flex-col flex text-[rgba(0,0,0,0.7)] mt-4 mb-4">
        <div className="w-full border border-solid p-4 rounded-md bg-[rgba(255,255,255,0.95)] text-[0.875rem]">
          <div>... PolaroidDetail</div>
          <div className="flex flex-col">
            <div>
              {` <TabSectionContainer sectionIdx={0}>
                <PolaroidIntroduce
                    ref={(e) => {
                    if (e) sectionRefs.current[0] = e;
                    }}
                />
                </TabSectionContainer>
        `}
              <div>
                {`    <TabSectionContainer sectionIdx={1}>
                    <PolaroidFeatures
                        ref={(e) => {
                        if (e) sectionRefs.current[1] = e;
                        }}
                    />
                    </TabSectionContainer>
            `}
              </div>
              <div>
                {`   <TabSectionContainer sectionIdx={2}>
                        <PolaroidTechStack
                            ref={(e) => {
                            if (e) sectionRefs.current[2] = e;
                            }}
                        />
                        </TabSectionContainer>
                `}
              </div>
              <div>
                {`       <TabSectionContainer sectionIdx={3}>
                        <PolaroidInSight
                            ref={(e) => {
                            if (e) sectionRefs.current[3] = e;
                            }}
                        />
                        </TabSectionContainer>
                `}
              </div>
              <div>
                {` 
                        <TabSectionContainer sectionIdx={4}>
                        <PolaroidInSight
                            ref={(e) => {
                            if (e) sectionRefs.current[4] = e;
                            }}
                        />
                        </TabSectionContainer>`}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          TabSectionContainer에서 해당 컴포넌트의 Idx를 체크해서 원하는 탭구성만
          생성하도록 구성하여 재사용및 유지보수가 쉽도록 구성하였습니다.
        </div>
        <div className="flex-col flex text-[rgba(0,0,0,0.7)] mt-4 mb-4">
          <div className="w-full border border-solid p-4 rounded-md bg-[rgba(255,255,255,0.95)] text-[0.875rem]">
            <div>... TabSectionContainer</div>
            <div className="flex flex-col">
              <div>
                {` getTabList().map(
                        (v) =>
                        v.idx === sectionIdx && (
                            <section
                            key={v.idx}
                            ref={sectionRef}
                            >
                            {children}
                            </section>
                        )
                    )
             `}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PolaroidFeatures;
