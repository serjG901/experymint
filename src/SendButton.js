import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function SendButton({ children }) {
  const themeColor = useTheme();
  const [style, setStyle] = useState(
    `
    shadow-none bg-transparent
    transition-all 
    duration-1000
    mb-4 mx-4 py-2 px-4 
    text-white
    rounded cursor-pointer
    focus:outline-none 
    focus:shadow-outline
    `
  );

  function animation() {
    setStyle(
      `
      shadow-none bg-transparent
      transition-all 
      duration-1000
      mb-4 mx-4 py-2 px-4 
      text-white
      rounded cursor-pointer
      focus:outline-none 
      focus:shadow-outline
      shadow-md ${themeColor.bg500} ${themeColor.hbg700}
      `
    );
  }

  useEffect(() => animation());

  return (
    <button className={style} type="submit">
      {children}
    </button>
  );
}
