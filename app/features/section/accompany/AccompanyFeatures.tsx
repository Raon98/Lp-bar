import { forwardRef } from "react";

const AccompanyFeatures = forwardRef<HTMLDivElement>((_, sectionRefs) => {
  return <div className="flex flex-col" ref={sectionRefs}></div>;
});

export default AccompanyFeatures;
