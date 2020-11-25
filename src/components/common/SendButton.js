import React, { useEffect, useState } from "react";
import { useTheme } from "../core/ThemeProvider";

export default function SendButton({ children }) {
  const themeColor = useTheme();
  const [style, setStyle] = useState(
    `
    shadow-none bg-transparent
    transition-all 
    duration-1000
    mb-4 mx-4 py-2 px-4 
    ${themeColor.colorTextMain}
    rounded cursor-pointer
    focus:outline-none 
    focus:shadow-outline
    `
  );

  function animation() {
    setStyle(
      `
      shadow-md bg-transparent
      transition-all 
      duration-1000
      mb-4 mx-4 py-2 px-4 
      ${themeColor.colorTextMain}
      rounded cursor-pointer
      focus:outline-none 
      focus:shadow-outline
      shadow-md ${themeColor.bgButton} ${themeColor.hbgButton}
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
