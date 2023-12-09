"use client";

import { themes } from "@/themes";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import { Theme } from "daisyui";

export default function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as Theme)}
      tabIndex={0}
      className="select shadow border-base-300 bg-base-200"
    >
      {themes.map((theme) => (
        <option
          key={theme}
          value={theme}
          className="btn btn-sm btn-block btn-ghost justify-start"
        >
          {theme}
        </option>
      ))}
    </select>
  );
}
