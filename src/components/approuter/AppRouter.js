import React, { useState } from "react";
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
import { useTheme } from "../core/ThemeProvider";
import { useLogin, useLoginSet } from "../core/LoginProvider";
import { usePushUpError } from "../core/PushUpErrorProvider";
import { usePushUp } from "../core/PushUpProvider";
import Background from "../common/Background";

export default function AppRouter() {
  const themeColor = useTheme();
  const isLogin = useLogin();
  const setLogin = useLoginSet();
  const pushUpError = usePushUpError();
  const pushUp = usePushUp();

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
    setLogin(false);
    handleActivePage(null);
  }

  return (
    <div className={themeColor.colorTextMain}>
      {isLogin ? (
        <Router>
          <div className="AppFontFamily h-screen text-center">
            <nav className="flex">
              <Link
                title="To the user account"
                to="/account"
                onClick={() => handleActivePage("account")}
                className={
                  activePage === "account" ? linkActive : linkNotActive
                }
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
      )}
      {pushUpError}
      {pushUp}
      <Background />
    </div>
  );
}
