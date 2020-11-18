import React, { useContext, useEffect } from "react";
import ThemeColorContext from "./ThemeColorContext.js";
import Logo from "./Logo.js";
import Login from "./Login.js";
import ThemeColorSetter from "./ThemeColorSetter.js";
import Copyright from "./Copyright.js";
import bodyBgColor from "./bodyBgColor.js";

export default function Start({ onID, onThemeColor }) {
  const themeColor = useContext(ThemeColorContext);

  useEffect(() => {
    document.body.style.background = bodyBgColor[themeColor.color];
  });

  const style = ` 
    App h-screen
    flex flex-col 
    items-center 
    justify-center
    text-white
    ${themeColor.lbg}
    `;

  return (
    <div className={style}>
      <Logo image="logo.png">ExperyMint</Logo>
      <Login onID={onID} />
      <ThemeColorSetter onThemeColor={onThemeColor} />
      <Copyright>&copy;2020 ExperyMint.</Copyright>
    </div>
  );
}
