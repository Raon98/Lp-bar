import TechIconComponent from "@/app/features/detail/component/TechIconComponent";
import { forwardRef } from "react";

const AccompanyTechStack = forwardRef<HTMLDivElement>((_, sectionRefs) => {
  return (
    <div
      className="flex justify-around px-6 py-8 gap-y-3 w-full flex-wrap"
      ref={sectionRefs}
    >
      <div className="flex justify-center">
        <TechIconComponent title="프론트엔드&언어" icon={["React", "Typescript"]} />
        <TechIconComponent title="백엔드&DB" icon={["Java","MariaDB","Mybatis"]} />
        <TechIconComponent title="스타일링" icon={["Sass"]} />
      </div>
      <div className="flex justify-center">

        <TechIconComponent title="상태관리" icon={["Recoil", "ReactQuery"]} />
        <TechIconComponent title="클라우드" icon={["AwsEc2", "GoogleCloud"]} />
        <TechIconComponent title="CI/CD" icon={["Docker", "GitAction"]} />

      </div>
    </div>
  );
});

export default AccompanyTechStack;
