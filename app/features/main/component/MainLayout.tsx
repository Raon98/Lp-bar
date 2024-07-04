"use client";

import { useEffect, useState } from "react";
import Loading from "./Loading";
import useLoadingStore from "@/app/store/useLoadingStore";

export default function MainLayout() {
  const {introState} = useLoadingStore(state => state)
  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(!isLoading);
    }, 3000);
  }, []);
  return ( 
    <>
      {introState && <Loading />}
      {!introState && (
        <>
          <div className="">메인페이지입니다</div>
        </>
      )}
    </>
  );
}
