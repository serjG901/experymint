import React, { useContext, useEffect } from "react";
import LoginForm from "./LoginForm.js";
import Logo from "./Logo.js";
import ColorThemeSetter from "./ColorThemeSetter.js";
import Copyright from "./Copyright.js";
import ThemeColorContext from "./ThemeColorContext.js";

function Div({ children }) {
  const themeColor = useContext(ThemeColorContext);
  return (
    <div
      className={` 
        flex 
        flex-col 
        items-center 
        justify-center
        h-screen
        App
        text-white
        bg-gradient-to-b 
        from-${themeColor}-500
        via-${themeColor}-600 
        to-${themeColor}-300
        `}
    >
      {children}
    </div>
  );
}

export default function AppLogin({ CS, handleID, setColorThemeApp }) {
  return (
    <Div>
      <Logo CS={CS} />
      <LoginForm
        CS={CS}
        onID={(id) => {
          handleID(id);
        }}
      />
      <ColorThemeSetter
        CS={CS}
        setColorThemeApp={(color) => {
          setColorThemeApp(color);
        }}
      />
      <Copyright />
    </Div>
  );
}
