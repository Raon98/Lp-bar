import { forwardRef } from "react";

const AccompanyTroubles = forwardRef<HTMLDivElement>((_, sectionRefs) => {
  return (
    <div
      className="flex flex-col text-[5rem]"
      ref={sectionRefs}
    ></div>
  );
});

export default AccompanyTroubles;
