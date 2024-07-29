"use client";
import AccompanyDetail from "@/app/features/detail/component/AccompanyDetail";
import DetailLayout from "@/app/features/detail/component/DetailLayout";
import PolaroidDetail from "@/app/features/detail/component/PolaroidDetail";
import ProjectDetailLayout from "@/app/features/detail/component/ProjectDetailLayout";
import ResumeDetail from "@/app/features/detail/component/ResumeDetail";

import { useEffect } from "react";

export default function Page({ params }: { params: { id: string } }) {
  // const router = useRouter();
  const doc = ["1"];
  const pj = ["2", "3"];

  useEffect(() => {
    console.log(params.id === "1");
  }, []);

  return (
    <>
      {doc.includes(params.id) && (
        <DetailLayout id={params.id}>
          {params.id === "1" && <ResumeDetail />}
        </DetailLayout>
      )}

      {pj.includes(params.id) && (
        <ProjectDetailLayout id={params.id}>
          {params.id === "2" && <AccompanyDetail />}
          {params.id === "3" && <PolaroidDetail />}
        </ProjectDetailLayout>
      )}
    </>
  );
}
