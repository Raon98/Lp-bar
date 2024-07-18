'use client'

import React, { createContext, useContext, useState } from "react";
import { LpStateProp } from "../store/useLpStore";

type ThemeContextType = {
  theme: string;
  iconTheme: string;
  volumeColor : "primary" | "secondary" | "error" | "info" | "success" | "warning";
  toggleTheme: (lp: LpStateProp) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProps {
  children: React.ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState(`bg-matte-red`);
  const [iconTheme, setIconTheme] = useState("w");
  const [volumeColor, setVolumeColor] = useState<"primary" | "secondary" | "error" | "info" | "success" | "warning">("error");
  let color:"primary" | "secondary" | "error" | "info" | "success" | "warning" = 'error';

  const toggleTheme = (lp: LpStateProp) => {
    setTheme(`bg-matte-${lp.theme}`);
    setIconTheme(lp.iconTheme);
    console.log(color)
    switch (lp.theme) {
      case "red":
        color = "error";
        break;
      case "purple":
        color = "secondary";
        break;
      case "green":
        color = "success";
        break;
      case "skyblue":
        color = "info";
        break;
      case "yellow":
        color = "warning";
        break;
      case "lightGray":
        color = "primary";
        break;

      default:
    }
    console.log(color)
    setVolumeColor(color)
  };

  return (
    <ThemeContext.Provider value={{ theme, iconTheme, volumeColor, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
