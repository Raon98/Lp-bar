
'use client'

import React, { useEffect, useState } from 'react';


const MAX_STAR_COUNT = 50;
const colors = ['color1','color2','color3','color4']

interface MeteorEffectProps {
  count? : number;
  white? : boolean;
  maxDelay? : number;
  minSpeed? : number;
  maxSpeed? : number;
  angle? : number;
  direction? : "right" | "left";
  children? : React.ReactNode;
  className?: string;
}

export default function MeteorEffectLayout({ count = 12, white = false, maxDelay = 15, minSpeed = 2 , maxSpeed =  4, angle = 30, direction  = "right", children , className }: MeteorEffectProps) {
  const startCount = count < MAX_STAR_COUNT ? count : MAX_STAR_COUNT;
  const [starInterval, setStarInterval] = useState<number>(0);
  const [useMounted, setUseMounted] = useState<boolean>(false)

  useEffect(()=> {
    setUseMounted(true);
  },[])

  useEffect(() => {
    const calcStarInterval = () => {
      let innerWidth = window.innerWidth;
      setStarInterval(Math.floor((innerWidth * 1.5) / (count * 5)));
    }
    calcStarInterval();
    window.addEventListener("resize",calcStarInterval);
    return () => {
      window.removeEventListener("resize",calcStarInterval);
    }
  }, [])

  if(!useMounted) return null
  

  
  return (
    <div className={`absolute top-0 left-0 w-full h-full overflow-hidden bg-slate-800  ${className}`}>
      {(new Array(startCount).fill(0).map((_,idx) => {
      const left = `${Math.random() * count * 5 * starInterval}px`;
      const animationDelay =`${Math.random() * maxDelay}s`;
      const animationDuration = maxSpeed > minSpeed ? `${minSpeed + Math.random() * maxSpeed}s` : `${2 + Math.random() * 4}`; 
      const starColor = `${colors[idx % colors.length]}`;
      return <div key={idx}  className={`star star_${starColor} delay-[1000]s`} style={{left,animationDelay,animationDuration}}></div>
      }))}
      {children ?? children}
    </div>
  );
}
