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
import TestIcon from "./TestIcon.js";
import ThemeColorContext from "./ThemeColorContext.js";
import UserIDContext from "./UserIDContext.js";
import bodyBgColor from "./bodyBgColor.js";

export default function AppRouter({ onQuit }) {
  const themeColor = useContext(ThemeColorContext);
  const userID = useContext(UserIDContext);

  useEffect(() => {
    document.body.style.background = bodyBgColor[themeColor];
  });

  const linkStyle = `
    text-black text-center font-bold
    py-2 px-4 
    block h-full
  `;
  const linkNotActive = `
    bg-${themeColor}-300 
    hover:bg-transparent 
    ${linkStyle}
    `;
  const linkActive = `
    bg-transparent
    ${linkStyle}
    `;
  const linkQuit = `
    ${linkStyle}
    text-white
    bg-gray-600 
    hover:bg-gray-700 
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

  return (
    <Router>
      <div
        className={`
          App h-screen text-white
          bg-gradient-to-b 
          from-${themeColor}-500
          via-${themeColor}-600 
          to-${themeColor}-300
          `}
      >
        <nav>
          <ul className="flex">
            <li className={`flex-1 w-1/4`}>
              <Link
                title="to account"
                to="/account"
                onClick={() => {
                  handleActivePage("account");
                }}
                className={
                  activePage === "account" ? linkActive : linkNotActive
                }
              >
                <span className="break-word">{userID}</span>
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
                <TestIcon isActive={activePage === "game"} />
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
                Chat
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
                className={linkQuit}
              >
                X
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
          <Route exact path="/">
            {activePage ? <Redirect to={`/${activePage}`} /> : <Hello />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
