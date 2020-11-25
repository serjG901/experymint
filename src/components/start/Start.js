import React, { useEffect } from "react";
import { useTheme, bodyBgColor } from "../core/ThemeProvider";
import Logo from "./Logo";
import Login from "./Login";
import ThemeColorSetter from "./ThemeColorSetter";
import Copyright from "../common/Copyright";

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
    ${themeColor.colorTextMain}
    ${themeColor.bgApp}
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
