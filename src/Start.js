import React, { useContext, useEffect } from "react";
import ThemeColorContext from "./ThemeColorContext.js";
import Logo from "./Logo.js";
import Login from "./Login.js";
import ThemeColorSetter from "./ThemeColorSetter.js";
import Copyright from "./Copyright.js";

const bodyBgColor = {
  red: "#feb2b2",
  orange: "#fbd38d",
  yellow: "#faf089",
  green: "#9ae6b4",
  teal: "#81e6d9",
  blue: "#90cdf4",
  indigo: "#a3bffa",
  purple: "#d6bcfa",
  pink: "#fbb6ce",
  gray: "#e2e8f0"
};

export default function Start({ onID, onThemeColor }) {
  const themeColor = useContext(ThemeColorContext);

  useEffect(() => {
    document.body.style.background = bodyBgColor[themeColor];
  });

  return (
    <div
      id="start"
      className={` 
        App
        flex 
        flex-col 
        items-center 
        justify-center
        h-screen
        text-white
        bg-gradient-to-b 
        from-${themeColor}-500
        via-${themeColor}-600 
        to-${themeColor}-300
        `}
    >
      <Logo image="logo.png">ExperyMint</Logo>
      <Login onID={onID} />
      <ThemeColorSetter onThemeColor={onThemeColor} />
      <Copyright />
    </div>
  );
}
