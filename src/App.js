import React, { useState } from "react";
import "./styles.css";
import Router from "./Router.js";
import Start from "./Start.js";
import ThemeColorContext, { themeColorStyle } from "./ThemeColorContext.js";
import UserIDContext from "./UserIDContext.js";

function App() {
  const [userID, setUserID] = useState(
    window.localStorage.getItem("userID") || null
  );

  const [themeColor, setThemeColor] = useState(
    window.localStorage.getItem("themeColor") || "gray"
  );

  function handleID(id) {
    setUserID(id);
    window.localStorage.setItem("userID", id);
  }

  function handleQuit() {
    setUserID(null);
    window.localStorage.removeItem("userID");
  }

  function handleThemeColor(color) {
    setThemeColor(color);
    window.localStorage.setItem("themeColor", color);
  }

  return userID ? (
    <UserIDContext.Provider value={userID}>
      <ThemeColorContext.Provider value={themeColorStyle[themeColor]}>
        <Router onQuit={handleQuit} />
      </ThemeColorContext.Provider>
    </UserIDContext.Provider>
  ) : (
    <ThemeColorContext.Provider value={themeColorStyle[themeColor]}>
      <Start onID={handleID} onThemeColor={handleThemeColor} />
    </ThemeColorContext.Provider>
  );
}

export default App;
