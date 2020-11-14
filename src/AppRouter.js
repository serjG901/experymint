import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hello from "./Hello.js";
import Account from "./Account.js";
import Game from "./Game.js";
import Chat from "./Chat.js";

function RouterApp({ CS, userID, onQuit }) {
  const [activePage, setActivePage] = useState(null);

  function handleActivePage(page) {
    setActivePage(page);
  }

  return (
    <Router>
      <div className={CS.Main}>
        <nav>
          <ul className="flex">
            <li className={CS.routerLi}>
              <Link
                to="/account"
                onClick={() => {
                  handleActivePage("account");
                }}
                className={
                  CS.routerLink +
                  (activePage === "account" ? CS.routerLinkActive : "")
                }
              >
                <span className="break-word">{userID}</span>
              </Link>
            </li>
            <li className={CS.routerLi}>
              <Link
                to="/game"
                onClick={() => {
                  handleActivePage("game");
                }}
                className={
                  CS.routerLink +
                  (activePage === "game" ? CS.routerLinkActive : "")
                }
              >
                Game
              </Link>
            </li>
            <li className={CS.routerLi}>
              <Link
                to="/chat"
                onClick={() => {
                  handleActivePage("chat");
                }}
                className={
                  CS.routerLink +
                  (activePage === "chat" ? CS.routerLinkActive : "")
                }
              >
                Chat
              </Link>
            </li>
            <li className={CS.routerLi}>
              <Link to="/" onClick={onQuit} className={CS.routerLinkQuit}>
                X
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/game">
            <Game CS={CS} userID={userID} />
          </Route>
          <Route path="/chat">
            <Chat CS={CS} userID={userID} />
          </Route>
          <Route path="/account">
            <Account CS={CS} userID={userID} />
          </Route>
          <Route path="/">
            <Hello CS={CS} userID={userID} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default RouterApp;
