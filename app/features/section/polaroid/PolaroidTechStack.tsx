import React, { forwardRef } from 'react';
import TechIconComponent from '../../detail/component/TechIconComponent';

const PolaroidTechStack = forwardRef<HTMLDivElement>((_, sectionRefs)  => {
    return (
        <div
      className="flex justify-around px-6 py-8 gap-y-3 w-full flex-wrap"
      ref={sectionRefs}
    >
      <div className="flex justify-center">
        <TechIconComponent title="프론트엔드&언어" icon={["Next", "Typescript"]} />
        <TechIconComponent title="스타일링" icon={["Tailwind"]} />
        <TechIconComponent title="상태관리" icon={["Zustand"]} />
        <TechIconComponent title="CI/CD" icon={["Vercel"]} />
      </div>

    </div>
    );
});

export default PolaroidTechStack;