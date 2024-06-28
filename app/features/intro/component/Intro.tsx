"use client";
import Flex from "@/app/common/component/Flex";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute left-0 top-0 z-0 w-full h-full">
        <Image
          src="/assets/images/intro1.png"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
        >
        </Image>
      </div>
      <Image
          src="/assets/images/intro2.png"
          alt="Description of the image"
          objectFit="cover"
          width={602}
          height={1406}
        ></Image>
    </div>
  );
}
