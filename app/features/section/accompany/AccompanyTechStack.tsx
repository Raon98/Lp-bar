import TechIconComponent from "@/app/features/detail/component/TechIconComponent";
import { forwardRef } from "react";

const AccompanyTechStack = forwardRef<HTMLDivElement>((_, sectionRefs) => {
  return (
    <div
      className="flex justify-center px-6 py-8 gap-y-3 w-full"
      ref={sectionRefs}
    >
      <div className="flex">
        <TechIconComponent title="FRONTEND" icon={["React", "Typescript"]} />
        <TechIconComponent title="BACKEND" icon={["java"]} />
      </div>
    </div>
  );
});

export default AccompanyTechStack;
