import React, { useState } from "react";
import "./styles.css";
import AppRouter from "./AppRouter.js";
import AppLogin from "./AppLogin.js";
import { useConstantStyle } from "./UseConstantStyle.js";
import ThemeColorContext from "./ThemeColorContext.js";

function App() {
  const [userID, setUserID] = useState(false);
  const [CS, setCS] = useConstantStyle();

  const [themeColor, setThemeColor] = useState("teal");

  function handleID(id) {
    setUserID(id);
  }

  function handleQuit() {
    setUserID(false);
  }

  function setColorThemeApp(color) {
    setCS(color);
    setThemeColor(color);
  }

  return userID ? (
    <ThemeColorContext.Provider value={themeColor}>
      <AppRouter CS={CS} userID={userID} onQuit={handleQuit} />
    </ThemeColorContext.Provider>
  ) : (
    <ThemeColorContext.Provider value={themeColor}>
      <AppLogin
        CS={CS}
        handleID={handleID}
        setColorThemeApp={setColorThemeApp}
      />
    </ThemeColorContext.Provider>
  );
}

export default App;
