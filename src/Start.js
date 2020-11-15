import React, { useContext } from "react";
import ThemeColorContext from "./ThemeColorContext.js";
import Logo from "./Logo.js";
import Login from "./Login.js";
import ThemeColorSetter from "./ThemeColorSetter.js";
import Copyright from "./Copyright.js";

export default function Start({ onID, onThemeColor }) {
  const themeColor = useContext(ThemeColorContext);
  return (
    <div
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
