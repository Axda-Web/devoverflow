"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState("");

  // const handleThemeChange = () => {
  //   if (mode === "dark") {
  //     setMode("light");
  //     document.documentElement.classList.add("light");
  //   } else {
  //     setMode("dark");
  //     document.documentElement.classList.add("dark");
  //   }
  // };

  useEffect(() => {
    // handleThemeChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}