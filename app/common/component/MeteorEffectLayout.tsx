
'use client'

import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';


const MAX_STAR_COUNT = 50;
const colors = ["#c77eff", "#f6ff7e", "#ff8d7e", "#ffffff"];

const MeteorKeyframe = (direction: "left"|"right" ,angle : number) => keyframes`
  0% {
    top : -10vh;
    transform: translateX(0px);
    opacity: 1;
  }
  100% {
    top : 110vh;
    transform: translateX(${direction ==="left" ? "-" : "+"}${120 / Math.tan((angle * Math.PI)/ 180)}vh);
    opacity: 1;
  }
`
interface MeteorLayoutProps {
  $angle : number;
  $direction : "left" | "right"
  className?: string;
}
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
const MeteorRootLayout = styled.div<MeteorLayoutProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .star {
    position : relative;
    top: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #fff;
    animation: ${(props) => MeteorKeyframe(props.$direction,props.$angle)} 4s ease-in infinite;
    opacity : 0;
  }
  .star::after {
    position: absolute;
    top: calc(50%-1px);
    left : -950%;
    width: 2000%;
    height: 2px;
    background: linear-gradient(to left, #fff0,#fff);
    content: "";
    transform: ${(props)=> props.$direction === "left" ? `rotateZ(-${props.$angle}deg)` : `rotateZ(-${180 - props.$angle}deg)`} translateX(50%);
  }
  .star:nth-child(2){
        transform: translateX(300px);
        animation-delay: 5.1s;
    }
    .star:nth-child(3) {
        transform: translateX(450px);
        animation-delay: 1s;
    }
`
export default function MeteorEffectLayout({ count = 18, white = false, maxDelay = 15, minSpeed = 2 , maxSpeed =  4, angle = 30, direction  = "right", children , className }: MeteorEffectProps) {
  const startCount = count < MAX_STAR_COUNT ? count : MAX_STAR_COUNT;
  const [starInterval, setStarInterval] = useState<number>(0);

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

  return (
    <MeteorRootLayout className={`bg-slate-800  ${className}`} $angle={angle} $direction={direction}>
      {(new Array(startCount).fill(0).map((_,idx) => {
      const left = direction === "right" ? `${Math.random() * count * 5 * starInterval}px` : `${window.innerHeight - Math.random() * count * 5 * starInterval}px`;
      const animationDelay =`${Math.random() * maxDelay}s`;
      const animationDuration = maxSpeed > minSpeed ? `${minSpeed + Math.random() * maxSpeed}s` : `${2 + Math.random() * 4}`; 
      const colorIndex = Math.floor(Math.random() * colors.length - 0.001); 
      const size = `${2 + Math.floor(Math.random() * 5)}px`; 
      const boxShadow = `0px 0px 10px 3px ${colors[colorIndex]}`; 
      return <div key={idx} style={{left, animationDelay, animationDuration, boxShadow, width : size, height: size }} className='star'></div>
      }))}
      {children ?? children}
    </MeteorRootLayout>
  );
}
