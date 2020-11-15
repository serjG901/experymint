import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hello from "./Hello.js";
import Account from "./Account.js";
import Game from "./Game.js";
import Chat from "./Chat.js";
import ThemeColorContext from "./ThemeColorContext.js";

export default function AppRouter({ userID, onQuit }) {
  const themeColor = useContext(ThemeColorContext);
  const routerLinkStyle = `
    text-black 
    py-2 
    px-4 
    block
    text-center
    h-full
  `;
  const routerLink = `
    bg-${themeColor}-300 
    hover:bg-${themeColor}-500 
    ${routerLinkStyle}
    `;
  const routerLinkActive = `
    bg-${themeColor}-500
    `;
  const routerLinkQuit = `
    text-white
    font-bold 
    bg-gray-600 
    hover:bg-gray-700 
    ${routerLinkStyle}
    `;

  const [activePage, setActivePage] = useState(null);

  function handleActivePage(page) {
    setActivePage(page);
  }

  return (
    <Router>
      <div
        className={`
          h-screen
          App
          text-white
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
                to="/account"
                onClick={() => {
                  handleActivePage("account");
                }}
                className={
                  routerLink +
                  (activePage === "account" ? routerLinkActive : "")
                }
              >
                <span className="break-word">{userID}</span>
              </Link>
            </li>
            <li className={`flex-1 w-1/4`}>
              <Link
                to="/game"
                onClick={() => {
                  handleActivePage("game");
                }}
                className={
                  routerLink + (activePage === "game" ? routerLinkActive : "")
                }
              >
                Game
              </Link>
            </li>
            <li className={`flex-1 w-1/4`}>
              <Link
                to="/chat"
                onClick={() => {
                  handleActivePage("chat");
                }}
                className={
                  routerLink + (activePage === "chat" ? routerLinkActive : "")
                }
              >
                Chat
              </Link>
            </li>
            <li className={`flex-1 w-1/4`}>
              <Link to="/" onClick={onQuit} className={routerLinkQuit}>
                X
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/game">
            <Game userID={userID} />
          </Route>
          <Route path="/chat">
            <Chat userID={userID} />
          </Route>
          <Route path="/account">
            <Account userID={userID} />
          </Route>
          <Route path="/">
            <Hello userID={userID} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
