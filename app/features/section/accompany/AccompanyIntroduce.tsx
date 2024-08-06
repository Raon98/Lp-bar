import { forwardRef } from "react";

const AccompanyIntroduce = forwardRef<HTMLDivElement>((_, sectionRefs) => {
  return (
    <>
      <div className="flex flex-col" ref={sectionRefs}>
        <div className="text-[2.275rem]">동행하다</div>
        <div className="text-[1.275rem]">태어난 순간부터 나와 늘 동행하는 사람</div>
        <div className="flex  mt-[7.5rem] items-center  justify-center gap-x-12">
          <div className="w-[20.5rem] h-[20.5rem]  shadow-custom-border-3 flex items-center justify-center flex-col rounded-md bg-white">
            <div className="w-[6.5rem] h-[6.5rem] mb-10 flex items-center justify-center">
                <img
                        src={`/assets/images/accompany_intro1.png`}
                        alt="icon"
                        className="bg-no-repeat bg-transparent bg-center object-cover w-[85%]"
                      />
            </div>
            <div>당신이 태어난 순간</div>
            <div>어떤 분들이 축하해주었나요?</div>
          </div>
          <div className="w-[20.5rem] h-[20.5rem]  shadow-custom-border-3 flex items-center justify-center flex-col rounded-md bg-white">
          <div className="w-[6.5rem] h-[6.5rem] mb-10">
                <img
                        src={`/assets/images/accompany_intro2.png`}
                        alt="icon"
                        className="bg-no-repeat bg-transparent bg-center object-cover w-full"
                      />
            </div>
            <div>당신의 결혼하는 순간</div>
            <div>어떤 분들이 축복해주었나요?</div>
          </div>
          <div className="w-[20.5rem] h-[20.5rem]  shadow-custom-border-3 flex items-center justify-center flex-col rounded-md bg-white">
          <div className="w-[6.5rem] h-[6.5rem] mb-10 bg-black rounded-full">
                <img
                        src={`/assets/images/accompany_intro3.png`}
                        alt="icon"
                        className="bg-no-repeat bg-transparent bg-center object-cover w-full mt-3"
                      />
            </div>
            <div>당신의 가장 가까운사람이 떠나갈때</div>
            <div>어떤 분들이 곁에서 위로를 해주었나요?</div>
          </div>

        </div>
        <div className="mt-[5rem] w-full text-center text-[1.45rem]">태어난 순간부터 당신의 인생을 함께 동행하겠습니다</div>
      </div>

      <div className="text-[1.575rem] mt-[5rem]" >개발취지</div>
      <div className="text-[1.375rem] mt-[2rem]">
      <div>
      • 많은것이 변환하는 세상속에서 아직까지 경조사관리는 수기로 이루어지고
        있습니다. 
      </div>
      <div>
      • 복잡한 경조사비나 방명록등 하나하나 복잡하게 이루어지는 과정을
      모두 한눈에 알아 볼수있고 관리할 수 있도록 개발하였습니다.
      </div>
      </div>
    </>
  );
});

export default AccompanyIntroduce;
