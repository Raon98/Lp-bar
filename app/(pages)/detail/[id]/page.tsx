'use client'
import AccompanyDetail from "@/app/features/detail/component/AccompanyDetail";
import DetailLayout from "@/app/features/detail/component/DetailLayout";
import PolaroidDetail from "@/app/features/detail/component/PolaroidDetail";
import ResumeDetail from "@/app/features/detail/component/ResumeDetail";

import { useEffect } from "react";

export default function Page({params}:{params: {id : string}}) {
  // const router = useRouter();
  
  useEffect(()=> {
    console.log(params.id === '1')
  },[])

  return (
    <>
      <DetailLayout id={params.id}>
        {params.id === '1' && <ResumeDetail/>}
        {params.id === '2' && <AccompanyDetail/>}
        {params.id === '3' && <PolaroidDetail/>}
      </DetailLayout>
    </>
  );
}
