'use client'

import { useTheme } from "@/app/hooks/themeContext";

interface DetailLayoutProps {
  children: React.ReactNode;
}
const DetailLayout = ({children}: DetailLayoutProps) => {
    const { theme} = useTheme();
  return (
    <>
      <div className={`w-full h-screen overflow-y-auto ${theme} flex justify-center items-center`}>
        <div className=" w-[75%] h-screen bg-white">
          {children}
        </div>
      </div>
    </>
  );
};

export default DetailLayout;
