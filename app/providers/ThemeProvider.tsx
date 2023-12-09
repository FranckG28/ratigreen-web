"use client";

import React, { useContext, createContext, useState } from "react";
import { Theme } from "daisyui";

interface ThemeContextInterface {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const defaultTheme = "forest";

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: defaultTheme,
  setTheme: () => {},
});

export default function ThemeController({
  children,
}: {
  children: React.ReactNode;
}) {
  const contextValue = useContext(ThemeContext);
  const [theme, setTheme] = useState(contextValue.theme);

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
