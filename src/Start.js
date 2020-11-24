import React, { useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import Logo from "./Logo";
import Login from "./Login";
import ThemeColorSetter from "./ThemeColorSetter";
import Copyright from "./Copyright";
import bodyBgColor from "./bodyBgColor";

export default function Start({ onSetUserID, onSetThemeColor }) {
  const themeColor = useTheme();

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
      <Logo />
      <Login onSetUserID={onSetUserID} />
      <ThemeColorSetter />
      <Copyright />
    </div>
  );
}
