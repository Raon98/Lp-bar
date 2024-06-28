"use client";

interface FlexProps {
  children: React.ReactNode;
  direction?: string;
  justify?: string;
  align?: string;
  className?: string; 
}

export default function Flex({
  children,
  direction = "flex-row",
  justify = "justify-center",
  align = "items-center",
  className = "", 
}: FlexProps) {
  return (
    <div
      className={`flex w-full h-full ${direction} ${justify} ${align} ${className}`} 
    >
      {children}
    </div>
  );
}
