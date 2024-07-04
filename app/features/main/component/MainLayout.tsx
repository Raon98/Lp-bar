"use client";

import { useEffect, useState } from "react";
import Loading from "./Loading";
import useLoadingStore from "@/app/store/useLoadingStore";

export default function MainLayout() {
  const {setIntroState} = useLoadingStore(state => state);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIntroState(()=>{
        setLoading(!loading)
      })
    }, 1000);
  }, [setIntroState]);

  return ( 
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <div className="">메인페이지입니다</div>
        </>
      )}
    </>
  );
}
