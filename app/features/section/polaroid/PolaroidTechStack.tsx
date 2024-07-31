import React, { forwardRef } from 'react';

const PolaroidTechStack = forwardRef<HTMLDivElement>((_, sectionRefs)  => {
    return (
        <div className="flex flex-col text-[5rem] min-h-[500px]" ref={sectionRefs}>

        </div>
    );
});

export default PolaroidTechStack;