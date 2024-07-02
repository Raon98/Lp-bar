"use client";

import MeteorEffectLayout from "@/app/common/component/MeteorEffectLayout";
import Image from "next/image";

export default function Intro() {
  return (
    <>
      <div className="relative flex items-center z-10 h-full">
        {/* <div className="flex flex-col justify-center items-center text-2xl mb-80 text-white gap-5 w-1/2">
          {["처", "리", "야", "잡", "화", "점"].map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
        <div className="bg-transparent self-end">
          <div className="sr-only">잡화점</div>
          <Image
            src="/assets/images/shop.png"
            alt="shop"
            width={700}
            height={500}
            objectFit="cover"
          />
        </div> */}
      </div>
      <MeteorEffectLayout />
    </>
  );
}
