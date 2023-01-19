import React from "react";
import { IThemeConfig, typeMode } from "../interface";
import { FaEye } from "react-icons/fa";
import { useLocalStorage } from "../hooks/useLocalStorage";
export interface IThemeSwitchProps {}

export default function ThemeSwitch(props: IThemeSwitchProps) {
  const [theme, setTheme] = useLocalStorage<IThemeConfig>("theme", {
    mode: "light",
  });

  return (
    <div className="inline-flex items-center">
      <FaEye className="w-4 h-4 mr-2" />
      <select
        name="themeSwitch"
        value={theme.mode}
        onChange={(e) => {
          const root = window.document.documentElement;
          root.classList.remove(theme.mode);
          root.classList.add(e.target.value);
          setTheme({ mode: e.target.value as typeMode });
        }}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}
