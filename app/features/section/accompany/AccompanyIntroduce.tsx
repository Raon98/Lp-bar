import { forwardRef } from "react";

const AccompanyIntroduce = forwardRef<HTMLDivElement>((_, sectionRefs) => {
  return (
    <>
      <div className="flex flex-col" ref={sectionRefs}>
        <div className="text-[1.875rem]">동행하다</div>
        <div>태어난 순간부터 나와 늘 동행하는 사람</div>
        <div className="flex flex-col mt-12">
          <div>
            - 돌잔치부터 장례까지인생을 사는 동안 우리 주변에 늘 따라오는
            경조사들
          </div>
          <div>
            - 당신의 행복한 순간 어떤 사람이 축하해주었는지 기억나시나요?
          </div>
          <div>
            - 당신의 가장 가까운사람이 떠나갈때 곁에서 위로를 해주었나요?
          </div>
        </div>
        <div>태어난 순간부터 당신의 인생을 함께 동행하겠습니다</div>
      </div>

      <div>개발취지</div>
      <div>
        많은것이 변환하는 세상속에서 아직까지 경조사관리는 수기로 이루어지고
        있습니다. 복잡한 경조사비나 방명록등 하나하나 복잡하게 이루어지는 과정을
        모두 한눈에 알아 볼수있고 관리할 수 있도록 개발하였습니다.
      </div>

      <div>돌잔치</div>
      <div>결혼식</div>
      <div>장례식</div>
    </>
  );
});

export default AccompanyIntroduce;
