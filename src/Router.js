import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Hello from "./Hello.js";
import Account from "./Account.js";

import Game from "./Game.js";
import Chat from "./Chat.js";
import AccountIcon from "./AccountIcon.js";
import GameIcon from "./GameIcon.js";
import ChatIcon from "./ChatIcon.js";
import QuitIcon from "./QuitIcon.js";
import ThemeColorContext from "./ThemeColorContext.js";
import bodyBgColor from "./bodyBgColor.js";

export default function AppRouter({ onQuit }) {
  const themeColor = useContext(ThemeColorContext);

  useEffect(() => {
    document.body.style.background = bodyBgColor[themeColor.color];
  });

  const linkStyle = `
    text-black text-center
    py-2 px-4 
    block h-full
  `;
  const linkNotActive = `
    ${themeColor.bg300}
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

  const style = `App h-screen text-white`;

  return (
    <Router>
      <div className={[style, themeColor.lbg].join(" ")}>
        <nav>
          <ul className="flex">
            <li className={`flex-1 w-1/4`}>
              <Link
                title="To the user account"
                to="/account"
                onClick={() => {
                  handleActivePage("account");
                }}
                className={
                  activePage === "account" ? linkActive : linkNotActive
                }
              >
                <AccountIcon />
              </Link>
            </li>
            <li className={`flex-1 w-1/4`}>
              <Link
                title="To the game"
                to="/game"
                onClick={() => {
                  handleActivePage("game");
                }}
                className={activePage === "game" ? linkActive : linkNotActive}
              >
                <GameIcon />
              </Link>
            </li>
            <li className={`flex-1 w-1/4`}>
              <Link
                title="To the chat"
                to="/chat"
                onClick={() => {
                  handleActivePage("chat");
                }}
                className={activePage === "chat" ? linkActive : linkNotActive}
              >
                <ChatIcon />
              </Link>
            </li>
            <li className={`flex-1 w-1/4`}>
              <Link
                title="Sign out"
                to="/"
                onClick={() => {
                  handleActivePage(null);
                  onQuit();
                }}
                className={linkNotActive}
              >
                <QuitIcon />
              </Link>
            </li>
          </ul>
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
  );
}
