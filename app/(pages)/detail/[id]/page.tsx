'use Client'
import AccompanyDetail from "@/app/features/detail/component/AccompanyDetail";
import DetailLayout from "@/app/features/detail/component/DetailLayout";
import PolaroidDetail from "@/app/features/detail/component/PolaroidDetail";
import ResumeDetail from "@/app/features/detail/component/ResumeDetail";

import { useEffect } from "react";

export default function Page({params}:{params: {idx : number}}) {
  // const router = useRouter();
  
  // useEffect(()=> {
  //   const idxArr = [1,2,3]
  //   if(!idxArr.includes(params.idx)){
  //     router.push('/main')
  //   }
  // },[])
  return (
    <>
      <DetailLayout>
        {params.idx === 1 && <ResumeDetail/>}
        {params.idx === 2 && <AccompanyDetail/>}
        {params.idx === 3 && <PolaroidDetail/>}
      </DetailLayout>
    </>
  );
}
