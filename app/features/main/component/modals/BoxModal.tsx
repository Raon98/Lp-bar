"use client";
import useModalStore from "@/app/store/useModalStore";
import React from "react";

const BoxModal = () => {
  const {modalState,modalClose} = useModalStore();

  return <>{modalState('box') && <div className=" w-full h-full absolute z-10 bg-slate-500">
        <div onClick={() => modalClose('box')}>CLOSE</div>
        <div>모달창입니다.</div>
    </div>}</>;
};

export default BoxModal;
