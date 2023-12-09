"use client";

import { useContext, useEffect } from "react";
import { ThemeContext, defaultTheme } from "../providers/ThemeProvider";

export default function ThemeReset() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme !== defaultTheme) setTheme(defaultTheme);
  }, []);

  return <></>;
}
