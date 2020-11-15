import React, { useState } from "react";
import "./styles.css";
import AppRouter from "./AppRouter.js";
import AppStart from "./AppStart.js";
import ThemeColorContext from "./ThemeColorContext.js";

function App() {
  const [userID, setUserID] = useState(false);

  const [themeColor, setThemeColor] = useState(
    window.localStorage.getItem("themeColor") || "teal"
  );

  function handleID(id) {
    setUserID(id);
  }

  function handleQuit() {
    setUserID(false);
  }

  function handleThemeColor(color) {
    setThemeColor(color);
    window.localStorage.setItem("themeColor", color);
  }

  return userID ? (
    <ThemeColorContext.Provider value={themeColor}>
      <AppRouter userID={userID} onQuit={handleQuit} />
    </ThemeColorContext.Provider>
  ) : (
    <ThemeColorContext.Provider value={themeColor}>
      <AppStart onID={handleID} onThemeColor={handleThemeColor} />
    </ThemeColorContext.Provider>
  );
}

export default App;
