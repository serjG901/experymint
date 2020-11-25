import React, { useEffect, useState } from "react";
import { themeColorStyle, useThemeSet } from "../core/ThemeProvider";

export default function ThemeColorSample({ color, children }) {
  const [style, setStyle] = useState(
    `
    absolute
    delay-1000
    transition-all 
    duration-1000
    h-6 w-6 cursor-pointer
    `
  );

  const setThemeColor = useThemeSet();

  function animation() {
    setStyle(
      `
      flex-1 delay-1000
      transition-all 
      duration-1000
      h-6 w-6 cursor-pointer
      ${themeColorStyle[color].sample}
      `
    );
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => animation(), 1000);
    return () => clearTimeout(timeoutId);
  });

  return (
    <div
      title={`Set ${color} theme`}
      className={style}
      onClick={() => setThemeColor(color)}
    >
      {children}
    </div>
  );
}
