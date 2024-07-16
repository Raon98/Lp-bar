'use client'

import React, { createContext, useContext, useState } from "react";
import { LpStateProp } from "../store/useLpStore";

type ThemeContextType = {
  theme: string;
  iconTheme: string;
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

  const toggleTheme = (lp: LpStateProp) => {
    setTheme(`bg-matte-${lp.theme}`);
    setIconTheme(lp.iconTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, iconTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
