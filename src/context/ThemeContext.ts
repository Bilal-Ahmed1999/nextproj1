'use client'

import { createContext, useState, ReactNode } from "react";

type ThemeMode = "dark" | "light";

type ThemeContextType = {
  mode: ThemeMode;
  toggle: () => void;
};

const initialContext: ThemeContextType = {
  mode: "dark",
  toggle: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialContext);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  const contextValue: ThemeContextType = {
    mode,
    toggle,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};


