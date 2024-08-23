import React, { forwardRef } from "react";
import Image from 'next/image'

const PolaroidIntroduce = forwardRef<HTMLDivElement>((_, sectionRefs) => {
  return (
    <div className="flex flex-col" ref={sectionRefs}>
      <div className="flex justify-between items-center">
        <div className="text-[2.275rem]">Polariod</div>
        <div className="text-[1.175rem] text-gray-500 pr-10 pt-10">
          2024.07 ~ 진행중
        </div>
      </div>
      <div className="flex flex-col  mt-[5.5rem] items-center  justify-center text-[rgba(0,0,0,0.7)]">
        <div>
          LP Bar 매력은 다양하고 색다른 음악들을 편안하게 경험할 수
          있다는점입니다.
        </div>
        <div>이처럼 Polariod Bar 안에서 편안하게 경험하시길 바랍니다.</div>
      </div>

      <div className="mt-[5.5rem]">
        <div className="flex flex-col mb-8 gap-2">
          <div className="text-[1.215rem]">LP판</div>
          <div className="flex flex-col justify-center gap-y-1 text-[rgba(0,0,0,0.8)]">
            <div>· 기존의 LP판은 앨범의 대한 다양한 곡정보를 담고있습니다.</div>
            <div>
              · 음악적인 정보를 넘어서 저의 대한 다양한 경험들을 LP판 속에 담아
              소개하려 합니다.
            </div>
            <div className="flex gap-x-5 pt-5 pb-5">
                <div className=" w-[18rem] h-[15rem] shadow-custom-border-3 flex items-center justify-center flex-col rounded-md bg-white p-4">
                <Image
                      src={`/assets/images/polaroid2.png`}
                      width={500}
                      height={500}
                      alt="accompany2"
                    />
                </div>
                <div className=" w-[18rem] h-[15rem] shadow-custom-border-3 flex items-center justify-center flex-col rounded-md bg-white  p-4">
                <Image
                      src={`/assets/images/polaroid1.png`}
                      width={500}
                      height={500}
                      alt="accompany2"
                    />
                </div>
            </div>
            <div>· 각각의 LP들은 새롭고 다양하게 즐기실수 있습니다.</div>
          </div>
        </div>
        <div className="flex flex-col mb-12 gap-2">
          <div className="text-[1.215rem]">다양한 색상</div>
          <div className="flex flex-col justify-center gap-y-1 text-[rgba(0,0,0,0.8)]">
            <div>· LP판은 다양한 색으로 구성되어있습니다.</div>
            <div className="flex justify-center">
            <div className=" w-[75%] h-[20rem] shadow-custom-border-3 flex items-center justify-center flex-col rounded-md bg-white p-4">
                <Image
                      src={`/assets/images/polaroid3.png`}
                      width={500}
                      height={500}
                      alt="accompany2"
                      className="w-[80%]"
                    />
                </div>
            </div>
            <div className="flex items-center flex-col justify-center mt-4">
                <div>각각의 색상이 잘 어우러지기도 하지만 그렇다고 각각 색상의 대한
                매력이 떨어지지 않듯이</div>
                <div >다양하고 매력적인 LP를 경험하실 수 있으십니다.</div>
             
            </div>
        
          </div>
        </div>
        <div className="flex flex-col mb-12 gap-2">
          <div className="text-[1.215rem]">매력적인 경험</div>
          <div className="flex flex-col justify-center gap-y-1 text-[rgba(0,0,0,0.8)]">
            <div>
              · 매력적인 경험은 사용자가 즐거움을 느끼는데 온다고 생각합니다.
            </div>
            <div>
              · 저희 LP Bar안에 숨겨져있는 여러가지 이벤트를 경험해보시길
              바라겠습니다.
            </div>
          </div>
        </div>
        <div className="text-[rgba(0,0,0,0.7)] flex justify-center text-[1.125rem]">
            {"Hint. 현실에서 LP판은 손으로 잡아서 교체 진행합니다 :)"}
          </div>
      </div>
    </div>
  );
});

export default PolaroidIntroduce;
