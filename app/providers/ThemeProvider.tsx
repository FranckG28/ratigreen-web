"use client";

import React, { useContext, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface ThemeContextInterface {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: "black",
  setTheme: () => {},
});

export default function ThemeController({
  children,
}: {
  children: React.ReactNode;
}) {
  const contextValue = useContext(ThemeContext);
  const [theme, setTheme] = useLocalStorage("theme", contextValue.theme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <main className={"min-h-screen relative"} data-theme={theme}>
        {children}
      </main>
    </ThemeContext.Provider>
  );
}
