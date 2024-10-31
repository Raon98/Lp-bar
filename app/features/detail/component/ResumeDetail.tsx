"use Client";

import { cn } from "@/app/common/utils/cn";
import { useEffect, useState } from "react";

const ResumeDetail = () => {
  const [name, setName] = useState("김성철");
  const [changeNm, setChangeNm] = useState(false);

  useEffect(() => {
    let changeNm = name === "김성철" ? "KimSungcheol" : "김성철";
    if (name) {
      setTimeout(() => {
        setName(changeNm);
        setChangeNm(true);

        setTimeout(() => {
          setChangeNm(false);
        }, 1000);
      }, 6000);
    }
  }, [name]);
  return (
    <>
      <div className="w-full mt-5">
        <div className={cn("text-[2.25rem]", changeNm && "animate-fadeIn")}>
          {name}
        </div>

        <div className="flex flex-col w-full mt-6">
          <div>이메일 : cheol1998@kakao.com</div>
          <div>연락처 : 010-6392-8576</div>
        </div>

        <div className="mt-6 border-gray-200 border-solid border w-full"></div>

        <div>
          <div className="mt-3">
            <div className="text-[1.15rem]">평범함에 김성철 더하기</div>
            <div>안녕하세요. 3년차 프론트엔드 개발자 김성철입니다.</div>
            <div className="flex flex-col">
              <div>
                현재 직장에서는 Vue.js와 Java를 이용하여 대규모 대학교서비스를
                운영하고있습니다.
              </div>
              <div>
                기초적인 서버,DB 등 지식을 기반으로두고 프론트엔드 기술을
                중점으로 Next.js,React.js등 여러 프레임워크를 공부하고 실제
                프로젝트에 적용해가며 끊임없이 발전해 나아가고 있습니다.
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-[1.015rem]">[핵심역량]</div>
            <div>- 공통화된 컴포넌트 및 최적화된 공통화 코드 운영</div>
            <div>- 프로젝트 초기 기획 및 설계 개발 진행</div>
            <div>- 감각적인 디자인 능력과 최적화된 UI/UX 기획</div>
            <div>- 원활한 의사소통능력 및 내용의 대한 문서정리 능력</div>
            <div>- 새로운 기술의대한 거부감없는 습득력</div>
          </div>
        </div>

        <div className="mt-6 border-gray-200 border-solid border w-full"></div>

        <div className="mt-3 flex">
          <div className="text-[1.25rem] min-w-[20%] flex-shrink-0 pl-4 pt-4">
            경력
          </div>

          <div className="flex flex-col">
            <div className="text-[1.345rem]">(주)로텍스</div>
            <div>2022.2 ~ 현재</div>

            <div className="mt-6 text-[1.015rem]">
              ● 자사 캠퍼스 앱(상명대학교) 2024.09 ~ 2024.10 [배포완료]
            </div>
            <div className="flex flex-col text-[0.975rem] ">
              <div>[기존 바닐라 캠퍼스앱 NextJs로 마이그레이션 작업]</div>

              <div>- {"전체적인 ui/ux 개선 -> 로그인/메인/학생증 등.."}</div>
              <div>- ssr을 이용한 api 요청 속도 개선</div>
              <div>- {"기존 Url인코딩 -> Jwt를 이용한 api 보안 개선"}</div>
              <div>
                - 이미지 preview속도 개선 및 최적화로 페이지 변환/이동 속도 향상
              </div>
              <div>- Docker를 이용한 ci/cd 구축</div>
            </div>

            <div className="mt-6 text-[1.015rem]">
              ● 신한은행 헤이영캠퍼스 2022.2 ~ 현재진행중
            </div>
            <div className="flex flex-col text-[0.875rem] ">
              <div className="">- Vue3를 이용하여 프론트엔드 화면 개발</div>
              <div className="">- 타 학교/협력업체 SSO 연동 및 개발</div>
              <div className="">- 기존 소스 컴포넌트화 및 공통화 작업 진행</div>
              <div className="">- Java 및 Mybatis를 이용하여 백엔드 개발</div>
            </div>

            <div className="mt-6">
              <div>[반복 코드 최적화를 통한 유지 보수성 개선]</div>
              <div className="mt-2 flex flex-col">
                <div>
                  • 이슈 : 오픈일이 촉박한 상황에서 짜여져있던 반복적이고
                  불필요한 코드가 확인가 확인됨
                </div>
                <div>
                  • 해결 : 캘린더, 푸시 메시지, 유틸 함수 등 반복적인 요소를
                  컴포넌트화하여 코드 간소화 및 유지 보수성을 향상함
                </div>
              </div>
              <div className="mt-4">[실시간 클라이언트 요청 대응 구축]</div>
              <div className="mt-1 flex flex-col">
                <div>
                  {
                    "•  이슈1 : 신한은행 프로젝트인만큼 배포과정이 상당히 복잡하였기에 WebView환경이지만 실시간으로 클라이언트 요청을 대응하기가 어려웠음 (ex : 특정화면 명칭을 A->B로 변경해주세요)"
                  }
                </div>
                <div className="flex flex-col">
                  <div>
                    • 해결1 : 공통Table에서 특정 컬럼값을 기준으로 Flag값을 잡고
                    관리자 페이지에서 해당 Flag값만 수정하면 실시간으로 대응할
                    수 있도록 기존 하드코딩 방식에서 실시간 유지보수의 기반을
                    다짐
                  </div>
                  <div>
                    {
                      "=> 현재는 해당 Role을 기준으로 반복적인 학교추가를 진행할 때 기준 Flag값으로 사용중"
                    }
                  </div>
                </div>
                <div className="mt-1 flex flex-col">
                  <div>
                    • 이슈2 : 기존 하드코딩으로 되어있던 컬럼값의 경우 또한
                    실시간 대응이 어려웠음
                  </div>
                  <div className="flex-col flex">
                    <div>
                      • 해결2 : DB팀과 협력하여 데이터의 첫번째 배열에 기준
                      컬럼값을 받은후 컬럼값을 Key값으로 잡아 for문으로 화면에
                      표시함
                    </div>
                    <div>
                      {
                        "=> 중계서버에서는 데이터값만 변경하면 모바일Web상에서는 실시간으로 데이터가 연동됨"
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">[타 업체 연동작업]</div>
              <div className="mt-1 flex flex-col">
                <div>
                  • 이슈 : 대학서비스가 거의 100개를 바라보는 시점에서 다양하고
                  많은 문의가 들어옴
                </div>
                <div>
                  • 해결 : Slack/ Jira 협업툴을 통해 문의 내용을 공유 받은후
                  해당 내용을 통한 오류로그를 파악하여 이슈 개선 및 성능 개선을
                  진행함
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 border-gray-200 border-solid border w-full"></div>

        <div className="mt-3 flex w-full">
          <div className="text-[1.25rem] min-w-[20%] pl-4 pt-4">학력</div>
          <div className="flex flex-col w-full px-6 py-2">
            <div className="text-[1.075rem]">한국방송통신대학교</div>
            <div className="flex justify-between">
              <div className="text-[0.875rem]">컴퓨터과학과</div>
              <div className="">2024.02 ~ Ing</div>
            </div>
            <div className="text-[1.075rem] mt-6">명지전문대학교</div>
            <div className="flex justify-between">
              <div className="text-[0.875rem]">소프트웨어 콘텐츠학과</div>
              <div className="">2020.02 ~ 2022.02</div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-gray-200 border-solid border w-full"></div>
        <div className="mt-3 flex w-full">
          <div className="text-[1.25rem] min-w-[20%] pl-4 pt-4">기술</div>
          <div className="flex flex-col w-full px-6 py-2">
            <div className="text-[1.075rem]"></div>
            <div className="flex justify-between flex-col gap-y-4 text-[0.925rem]">
              <div>언어 : Typescript, Javascript , java</div>
              <div>프레임워크 : Vue3, Reactjs, Nextjs</div>
              <div>상태관리 : Vuex, Recoil, Zustand</div>
              <div>
                디자인 : Css, Scss(Sass), TailwindCss, StyledComponent, Figma
              </div>
              <div>배포 : Aws Ec2, Docker, GitAction</div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-gray-200 border-solid border w-full"></div>
        <div className="mt-3 flex w-full">
          <div className="text-[1.25rem] min-w-[20%] pl-4 pt-4">링크</div>
          <div className="flex flex-col w-full px-6 py-2">
            <div className="text-[1.075rem]">깃허브</div>

            <a
              href="https://github.com/Raon98"
              target="_blank"
              rel="github"
              className="text-[0.925rem] text-black"
            >
              https://github.com/Raon98
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeDetail;
