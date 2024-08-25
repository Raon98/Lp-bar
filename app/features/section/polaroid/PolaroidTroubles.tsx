import { forwardRef } from "react";

const PolaroidTroubles = forwardRef<HTMLDivElement>((_, sectionRefs) => {
  return (
    <div className="flex flex-col min-h-[300px]" ref={sectionRefs}>
      <div className="text-[1.125rem]">
        #1. 스크롤 이벤트 Element 겹칠 시 애니메이션 오류 해결
      </div>
      <div className=" text-[0.975rem] mt-4">[내용]</div>
      <div className="flex flex-col text-[0.925rem] text-[rgba(0,0,0,0.8)] mt-2">
        <div>
          · 스크롤 이벤트의 위치값의 따라서 현재 탭의 아이템의 마지막 위치값일때
          FadeOut 다음 탭아이템은 FadeIn하는 기능을 추가하려고했었음
        </div>
        <div>
          · 해당 탭 Element의 하단값을 window.scrollY + window.innerHeigh 을
          이용해 구현하여 스크롤을 내렸을경우는 성공하였지만
        </div>
        <div>
          · 하지만 반대로 스크롤를 올릴시 하단을 기준으로 애니메이션을 변경하니
          특정 위치에서 애니메이션이 겹침현상이 나타남
        </div>
      </div>
      <div className=" text-[0.975rem] mt-4">[해결]</div>

      <div className="flex-col flex text-[rgba(0,0,0,0.7)] mt-2">
        <div className="w-full border border-solid p-4 rounded-md bg-[rgba(255,255,255,0.95)] text-[0.875rem]">
          <div>... useSectionStore</div>
          <div className="flex flex-col">
            <div>
              {` [{idx : 0 , tabNm : 'introduce', active : true, screenActive : true, startHeight : 0,endHeight : 0}, 
             `}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 text-[rgba(0,0,0,0.7)] text-[0.975rem]">
        먼저 Element의 기준 height을 하단값 하나에서 상단과 하단 두개로 분리함
      </div>

      <div className="flex-col flex text-[rgba(0,0,0,0.7)] mt-4">
        <div className="w-full border border-solid p-4 rounded-md bg-[rgba(255,255,255,0.95)] text-[0.875rem]">
          <div>... TabSectionContainer</div>
          <div className="flex flex-col">
            <div>
              {` 
               useEffect(() => {
                const handleScroll = () => {
                  if (sectionRef.current) {
                    const scrollPosition = window.scrollY + window.innerHeight * 0.3;

                    ...
                    }
                  }
                };
             `}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 text-[rgba(0,0,0,0.7)] text-[0.975rem]">
        또한 애니메이션 변환이 이루어지는 기준점을 화면 맨 하단에서 상단에서부터
        30%로 조정하여 해당 Element의 하단이 탭 위치정도에서 터치할때 다음 탭이
        보여지도록 수정하였음
      </div>

      <div className="text-[1.125rem] mt-8">
        #2. Next Image 컴포넌트 미사용에 따른 Lazy-loading문제 해결 및 추가작업
      </div>
      <div className=" text-[0.975rem] mt-4">[내용]</div>
      <div className="flex flex-col text-[0.925rem] text-[rgba(0,0,0,0.8)] mt-2">
        <div>
          · 이번 프로젝트에서 Next를 처음 사용하는 만큼 Next Image를 이용하여
          이미지 사이즈 조절에 어려움을 느낌
        </div>
        <div>
          · 그리하여 기본 Img태그를 구현하였으나 SSR환경에서의 이미지는 별도의
          lazy-loading 라이브러리를 사용하지않을때 해당 이미지 불러오는 속도가
          너무 느려서 불편함을 느낌
        </div>
      </div>
      <div className=" text-[0.975rem] mt-4">[해결]</div>
      <div className="mt-2 text-[rgba(0,0,0,0.7)] text-[0.975rem]">
        · 해당 이미지를 불러오는 컴포넌트에 ImageMount라는 Boolean값과
        Settimeout을 이용하여 0.1의 간격을 줘서 이미지 마운트를 시도하였고
        어느정도의 Lazy-loading이 되긴하였음
      </div>

      <div className="mt-2 text-[rgba(0,0,0,0.7)] text-[0.975rem]">
        · 하지만 이러한 방법 또한 이미지가 늘어나면서 여러 이미지의 대한 처리로
        인한 코드 복잡성 및 성능저하등 문제를 겪음
      </div>
      <div className="mt-2 text-[rgba(0,0,0,0.7)] text-[0.975rem]">
        · 그리하여 다른 lazy를 사용할것인지 Next에서 제공되는 NextImage
        컴포넌트를 사용할 것인지 선택의 갈림길에서 NextImage 컴포넌트는
        Lazy-loading뿐만아니라 이미지 리사이징 또한 된다고하여 전체적인 이미지
        컴포넌트 변환작업을 실시하였음
      </div>
    </div>
  );
});

export default PolaroidTroubles;
