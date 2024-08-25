import { forwardRef } from "react";

const PolaroidFeatures = forwardRef<HTMLDivElement>((_, sectionRefs) => {
  return (
    <div className="flex flex-col" ref={sectionRefs}>
      <div className="text-[1.225rem]"># 전역 상태관리</div>
      <div className="text-[rgba(0,0,0,0.7)]">
        · 이 프로젝트를 설계할때 제일 중요하게 생각했던부분은 확장성과 코드의
        재사용성 이였습니다.
      </div>
      <div className="text-[rgba(0,0,0,0.7)]">
        · 앞으로의 프로젝트를 늘려 나가면서 프로젝트들을 해당 프로젝트에
        추가시키기것이 목적이였기 때문에 단순히 하드코딩으로 컴포넌트를
        구성하는건 비효율적이라 생각하였고 공통 컴포넌트 및 Zustand를 사용한
        전역상태관리의 역할이 핵심이였습니다.
      </div>

      <div className="flex-col flex text-[rgba(0,0,0,0.7)] mt-4 mb-4">
        <div className="text-[1.125rem] mb-2">
          상세페이지에서의 핵심은 위에서 말한 확장성,재사용성,유연성입니다.
        </div>
        <div>
          1. 현재 기본탭으로는 [소개,기능,기술,트러블슈팅,인사이트] 등 총 5개로
          구성되어있지만 프로젝트마다 필요하지않은 탭구성이 있을수도있고
          추가적으로 필요한 탭이 생겨날 수도 있습니다.
        </div>
        <div className="mt-2">
          2. 특정 프로젝트를 생성할때마다 개개인의 탭을 구성하기보단 기존 코드를
          컴포넌트화해서 재사용을 할 수 있게 구성하는게 목표였습니다.
        </div>
        <div className="mt-2">
          3. 상세페이지의 탭 내용이 마다 길수도 작을수도있었는데 fadeIn-Out
          스크롤기능을 위해 컴포넌트마다 높이값이 유연하게 대응되도록 구성하는게
          목표였습니다.
        </div>

        <div className="w-full border border-solid p-4 rounded-md bg-[rgba(255,255,255,0.95)] text-[0.875rem] mt-8">
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

      <div className="mt-2">
        useSectionStore라는 Store에 기본탭의 대한 정보를 넣어두었고 다른탭을
        추가로 구성하고 싶을경우 간편히 한줄만 더 추가하면 되도록
        구성하였습니다.
      </div>

      <div className="flex-col flex text-[rgba(0,0,0,0.7)] mt-8">
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
        <div className="mt-2">
          그리하여 탭 상태를 전역으로 구성한후 프로젝트의 부모 Detail 컴포넌트(
          PolaroidDetail)에서 컴포넌트화한 필요한 탭 구성만 Ref로
          TabSectionContainer로 넘겨주었고
        </div>

        <div className="flex-col flex text-[rgba(0,0,0,0.7)] mt-8">
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
        <div className="mt-2">
          TabSectionContainer에서 해당 컴포넌트의 Idx를 체크해서 원하는 탭구성만
          생성하도록 구성하여 재사용및 유지보수가 쉽도록 구성하였습니다.
        </div>
      </div>
    </div>
  );
});

export default PolaroidFeatures;
