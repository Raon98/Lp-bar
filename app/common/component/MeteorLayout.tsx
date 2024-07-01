import React, { useEffect, useState } from 'react';
import Button from './Button';


const MAX_STAR_COUNT = 50;
const colors = ["#c77eff", "#f6ff7e", "#ff8d7e", "#ffffff"];

interface MeteorLayoutProps {
  children : React.ReactNode
}
export default function MeteorLayout({children}:MeteorLayoutProps ) {

  return (
    <div className="flex relative w-full h-full overflow-hidden bg-slate-800">
      <Button/>
    </div>
  );
}
