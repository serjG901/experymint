import React, { useState } from "react";
import "./styles.css";
import Router from "./Router.js";
import Start from "./Start.js";
import ThemeColorContext from "./ThemeColorContext.js";
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
    setUserID(false);
  }

  function handleThemeColor(color) {
    setThemeColor(color);
    window.localStorage.setItem("themeColor", color);
    window.localStorage.setItem("userID", null);
  }

  return userID ? (
    <UserIDContext.Provider value={userID}>
      <ThemeColorContext.Provider value={themeColor}>
        <Router onQuit={handleQuit} />
      </ThemeColorContext.Provider>
    </UserIDContext.Provider>
  ) : (
    <ThemeColorContext.Provider value={themeColor}>
      <Start onID={handleID} onThemeColor={handleThemeColor} />
    </ThemeColorContext.Provider>
  );
}

export default App;
