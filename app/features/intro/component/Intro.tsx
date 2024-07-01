"use client";
import MeteorLayout from "@/app/common/component/MeteorLayout";
import Image from "next/image";

export default function Intro() {
  return (
    <MeteorLayout>
      <div className="flex flex-col justify-center items-center text-2xl mb-80 text-white gap-5 w-3/12">
        {["처", "리", "야", "잡", "화", "점"].map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
      <div className="absolute flex right-24 bottom-0 -bottom-30 bg-transparent">
        <div className="sr-only">잡화점</div>
        <Image
          src="/assets/images/shop.png"
          alt="shop"
          width={650}
          height={500}
          objectFit="cover"
        />
      </div>
    </MeteorLayout>
  );
}
