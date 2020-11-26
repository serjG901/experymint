import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Start from "../start/Start";
import Hello from "./Hello";
import Account from "../account/Account";
import Game from "../game/Game";
import Chat from "../chat/Chat";
import { ReactComponent as AccountIcon } from "./AccountIcon.svg";
import { ReactComponent as GameIcon } from "./GameIcon.svg";
import { ReactComponent as ChatIcon } from "./ChatIcon.svg";
import { ReactComponent as QuitIcon } from "./QuitIcon.svg";
import { useTheme, bodyBgColor } from "../core/ThemeProvider";
import { useUserID, useUserIDSet } from "../core/UserIDProvider";

export default function AppRouter() {
  const themeColor = useTheme();
  const userID = useUserID();
  const setUserID = useUserIDSet();

  useEffect(() => {
    document.body.style.background = bodyBgColor[themeColor.color];
  });

  const linkStyle = `
    flex-1 w-1/4
    py-2 px-4 
    block h-full
  `;
  const linkNotActive = `
    ${themeColor.bgLink}
    hover:bg-transparent
    ${linkStyle}
    `;
  const linkActive = `
    bg-transparent
    ${linkStyle}
    `;

  const [activePage, setActivePage] = useState(
    window.localStorage.getItem("activePage") || null
  );

  function handleActivePage(page) {
    setActivePage(page);
    if (page) {
      window.localStorage.setItem("activePage", page);
      return;
    }
    window.localStorage.removeItem("activePage");
  }

  function handleQuit() {
    setUserID(null);
    handleActivePage(null);
  }

  const style = `
    App h-screen 
    ${themeColor.colorTextMain} 
    ${themeColor.bgApp}
    `;

  return userID ? (
    <Router>
      <div className={style}>
        <nav className="flex">
          <Link
            title="To the user account"
            to="/account"
            onClick={() => handleActivePage("account")}
            className={activePage === "account" ? linkActive : linkNotActive}
          >
            <AccountIcon />
          </Link>
          <Link
            title="To the game"
            to="/game"
            onClick={() => handleActivePage("game")}
            className={activePage === "game" ? linkActive : linkNotActive}
          >
            <GameIcon />
          </Link>
          <Link
            title="To the chat"
            to="/chat"
            onClick={() => handleActivePage("chat")}
            className={activePage === "chat" ? linkActive : linkNotActive}
          >
            <ChatIcon />
          </Link>
          <Link
            title="Sign out"
            to="/"
            onClick={() => handleQuit()}
            className={linkNotActive}
          >
            <QuitIcon />
          </Link>
        </nav>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/">
            {activePage ? <Redirect to={`/${activePage}`} /> : <Hello />}
          </Route>
        </Switch>
      </div>
    </Router>
  ) : (
    <Start />
  );
}
