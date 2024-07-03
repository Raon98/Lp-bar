"use client";

import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(!isLoading);
    }, 3000);
  }, []);
  return ( 
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div className="">메인페이지입니다</div>
        </>
      )}
    </>
  );
}
