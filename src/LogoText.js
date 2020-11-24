import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function LogoText() {
  const themeColor = useTheme();
  const [style, setStyle] = useState(
    `
    opacity-0
    transition-all 
    duration-1000
    text-5xl 
    font-bold
    ${themeColor.text300} 
    `
  );

  function animation() {
    setStyle(
      `
    opacity-100
    transition-all 
    duration-1000
    text-5xl 
    font-bold
    ${themeColor.text300} 
    `
    );
  }

  useEffect(() => {
    animation();
  });

  return <p className={style}>ExperyMint</p>;
}
