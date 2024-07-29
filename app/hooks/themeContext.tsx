"use client";

import React, { createContext, useContext, useState } from "react";
import { LpStateProp } from "../store/useLpStore";

type ThemeContextType = {
  theme: string;
  iconTheme: string;
  lightTheme: string;
  darkTheme: string;
  volumeColor:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
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
  const [theme, setTheme] = useState(`matte-red`);
  const [lightTheme, setLightTheme] = useState(`light-red`);
  const [darkTheme, setDarkTheme] = useState(`dark-red`);
  const [iconTheme, setIconTheme] = useState("w");
  const [volumeColor, setVolumeColor] = useState<
    "primary" | "secondary" | "error" | "info" | "success" | "warning"
  >("error");
  let color:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning" = "error";

  const toggleTheme = (lp: LpStateProp) => {
    setTheme(`matte-${lp.theme}`);
    setLightTheme(`light-${lp.theme}`);
    setDarkTheme(`dark-${lp.theme}`);
    setIconTheme(lp.iconTheme);
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
    setVolumeColor(color);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        lightTheme,
        darkTheme,
        iconTheme,
        volumeColor,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
