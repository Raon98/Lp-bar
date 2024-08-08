import TechIconComponent from "@/app/features/detail/component/TechIconComponent";
import { forwardRef } from "react";

const AccompanyTechStack = forwardRef<HTMLDivElement>((_, sectionRefs) => {
  return (
    <div className="flex flex-col px-6 py-8 gap-y-3 " ref={sectionRefs}>
      <TechIconComponent title="FRONTEND" />
      <TechIconComponent title="BACKEND" />
    </div>
  );
});

export default AccompanyTechStack;
