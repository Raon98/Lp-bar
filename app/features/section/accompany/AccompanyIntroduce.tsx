import { forwardRef } from "react";
import Image from 'next/image'
import { cn } from "@/app/common/utils/cn";

const AccompanyIntroduce = forwardRef<HTMLDivElement>((_, sectionRefs) => {
  return (
    <>
      <div className="flex flex-col" ref={sectionRefs}>
        <div className="flex justify-between items-center">
          <div className="text-[2.275rem]">동행하다</div>
          <div className="text-[1.175rem] text-gray-500 pr-10 pt-10">2024.05 ~ 진행중</div>
        </div>
    
        <div className="text-[1.275rem]">태어난 순간부터 나와 늘 동행하는 사람</div>
        <div className="flex  mt-[7.5rem] items-center  justify-center gap-x-12">
          <div className="w-[20.5rem] h-[20.5rem]  shadow-custom-border-3 flex items-center justify-center flex-col rounded-md bg-white">
            <div className="w-[6.5rem] h-[6.5rem] mb-10 flex items-center justify-center">
                  <Image
                      src={`/assets/images/accompany_intro1.png`}
                      width={100}
                      height={100}
                      alt="accompany1"
                      className={cn('w-[85%]')}
                    />
            </div>
            <div>당신이 태어난 순간</div>
            <div>어떤 분들이 축하해주었나요?</div>
          </div>
          <div className="w-[20.5rem] h-[20.5rem]  shadow-custom-border-3 flex items-center justify-center flex-col rounded-md bg-white">
          <div className="w-[6.5rem] h-[6.5rem] mb-10">
                      <Image
                      src={`/assets/images/accompany_intro2.png`}
                      width={100}
                      height={100}
                      alt="accompany2"
                    />
            </div>
            <div>당신의 결혼하는 순간</div>
            <div>어떤 분들이 축복해주었나요?</div>
          </div>
          <div className="w-[20.5rem] h-[20.5rem]  shadow-custom-border-3 flex items-center justify-center flex-col rounded-md bg-white">
          <div className="w-[6.5rem] h-[6.5rem] mb-10 rounded-full">
                      <Image
                      src={`/assets/images/accompany_intro3.png`}
                      width={200}
                      height={200}
                      alt="accompany3"
                      className={cn('mt-3')}
                    />
            </div>
            <div className="px-2">
            <div>당신의 소중한 사람이 떠나갈때</div>
            <div>어떤 분들이 위로를 해주었나요?</div>
            </div>
          </div>

        </div>
        <div className="mt-[5rem] w-full text-center text-[1.35rem]">태어난 순간부터 당신의 인생을 함께 동행하겠습니다</div>
      </div>

      <div className="text-[1.275rem] mt-[5rem]" >개발취지</div>
      <div className="text-[1.175rem] mt-[1.25rem]">
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
