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
            <div>
              현재 직장에서는 Vue,js와 Java를 이용한 풀스택개발자로 일하고 있지만 서버,DB 등 기초지식을 기반으로두고
              프론트엔드개발자로서 프론트엔드를 중심으로 공부하며 나아가고있습니다.
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

            <div className="mt-6 text-[1.015rem]">● 자사 캠퍼스 앱(상명대학교) 2024.09 ~ 2024.10 [배포완료]</div>
            <div className="flex flex-col text-[0.975rem] ">
              <div>[기존 바닐라 캠퍼스앱 NextJs로 마이그레이션 작업]</div>

              <div>- {"전체적인 ui/ux 개선 -> 로그인/메인/학생증 등.."}</div>
              <div>- ssr을 이용한 api 요청 속도 개선</div>
              <div>- {"기존 Url인코딩 -> Jwt를 이용한 api 보안 개선"}</div>
              <div>- 이미지 preview속도 개선 및 최적화로  페이지 변환/이동 속도 향상</div>
              <div>- Docker를 이용한 ci/cd 구축</div>
            </div>

            <div className="mt-6 text-[1.015rem]">● 신한은행 헤이영캠퍼스 2022.2 ~ 현재진행중</div>
            <div className="flex flex-col text-[0.875rem] ">
              <div className="">- Vue3를 이용하여 프론트엔드 화면 개발</div>
              <div className="">- 타 학교/협력업체 SSO 연동 및 개발</div>
              <div className="">- 기존 소스 컴포넌트화 및 공통화 작업 진행</div>
              <div className="">- Java 및 Mybatis를 이용하여 백엔드 개발</div>
            </div>

            <div className="mt-6">
              <div>[공통화 진행]</div>
              <div className="mt-2">
                - 대규모 프로젝트이고 초상기에 개발기간이 짧다 보니 컴포넌트화가
                미흡하고 반복적이고 비슷한 코드가 많았습니다. 이를 해결하기 위해
                비슷한 Vue컴포넌트끼리 묶어서 불필요한 컴포넌트를 제거함과
                동시에 주석화하여 다른 개발자분들도 한눈에 해당컴포넌트에 대해
                알 수 있도록 처리했습니다.
              </div>
              <div className="mt-4">[운영 유지보수의 간편화]</div>
              <div className="mt-1">
                - 신규 개발 및 운영 유지보수를 동시에 진행함에 따라 은행 특성상
                배포를 진행하는 과정 또한 까다로워 보통 1주일이라는 기간이
                기본으로 걸렸지만 학교의 요청사항은 실시간으로 변경해 달라는
                요청이 많았습니다. 이의 문제를 해결하기 위해 기본 정적으로
                되어있던 부분을 관리자페이지를 통해서 컨트롤할 수 있도록
                수정하였습니다. 공통코드라는 테이블을 이용하여 해당 값의 대한
                값이나 플래그를 등록하였고 화면소스상에서 공통코드의 값을 받아
                변경할 수 있도록 리팩토링 하여 차후 운영배포된 이후로 학교에서
                요청하는 부분 중 많은 부분들이 실시간으로 대응할 수 있게
                되었습니다.
              </div>
              <div className="mt-4">[타 업체 연동작업]</div>
              <div className="mt-1">
                - 학교마다 요구사항이 많은 만큼 해당학교에서 기존으로 사용하던
                업체들을 헤이영에 적용시켜 이어서 사용하고 싶어 하는 경우가
                많았습니다. 이러한 요구사항을 받아들여 해당 업체의 대한 정보를
                이용하여 헤이영에 녹아들 수 있도록 SSO 및 연동작업을
                진행했습니다.
              </div>
              <div className="mt-4">[큰 프로젝트의 대한 경험]</div>
              <div className="mt-1">
                - 신한은행에서 진행된 프로젝트이다 보니 규모가 큰 프로젝트였고
                그에 따른 다양하고 많은 개발자분들을 만나게 된 거 같습니다. 이
                회사를 다니면서 개발자로서 코딩실력도 중요하지만 결국 서로간의
                커뮤니케이션도 중요하다는 것을 느꼈습니다. 현재 협업툴로 Jira,
                Slack 등 사용하며 협업하는 과정에서 서로 다른 이해관계나
                기술적인 문제가 생겼을 때 문서로 정리하여 논리적으로 타 회사 /
                은행분들과 소통하여 불필요한 논쟁을 줄였던거 같습니다.
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
              <div>디자인 : Css, Scss(Sass), TailwindCss, StyledComponent, Figma</div>
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
