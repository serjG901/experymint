import React from "react";
import Logo from "./Logo";
import Login from "./Login";
import ThemeColorSetter from "./ThemeColorSetter";
import LanguageSetter from "./LanguageSetter";
import Copyright from "../common/Copyright";

export default function Start({ onSetUserID }) {
  const style = ` 
    AppFontFamily h-screen
    flex flex-col 
    items-center 
    justify-center
    text-center
    `;

  return (
    <div className={style}>
      <Logo />
      <Login onSetUserID={onSetUserID} />
      <ThemeColorSetter />
      <LanguageSetter />
      <Copyright />
    </div>
  );
}
