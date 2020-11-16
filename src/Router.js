import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hello from "./Hello.js";
import Account from "./Account.js";
import Game from "./Game.js";
import Chat from "./Chat.js";
import TestIcon from "./TestIcon.js";
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
    hover:bg-transparent 
    ${routerLinkStyle}
    `;
  const routerLinkActive = `
    bg-transparent
    ${routerLinkStyle}
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
                  activePage === "account" ? routerLinkActive : routerLink
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
                  activePage === "game" ? routerLinkActive : routerLink
                }
              >
                <TestIcon isActive={activePage === "game"} />
              </Link>
            </li>
            <li className={`flex-1 w-1/4`}>
              <Link
                to="/chat"
                onClick={() => {
                  handleActivePage("chat");
                }}
                className={
                  activePage === "chat" ? routerLinkActive : routerLink
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
