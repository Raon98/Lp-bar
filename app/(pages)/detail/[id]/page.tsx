"use client";
import DetailLayout from "@/app/features/detail/component/DetailLayout";
import ProjectDetailLayout from "@/app/features/detail/component/ProjectDetailLayout";
import ResumeDetail from "@/app/features/detail/component/ResumeDetail";
import AccompanyDetail from "@/app/features/section/accompany/AccompanyDetail";
import PolaroidDetail from "@/app/features/section/polaroid/PolaroidDetail";

export default function Page({ params }: { params: { id: string } }) {
  // const router = useRouter();
  const doc = ["1"];
  const pj = ["2", "3"];

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
