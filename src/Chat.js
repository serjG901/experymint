import React, { useContext } from "react";
import ChatList from "./ChatList.js";
import SaSTextForm from "./SaSTextForm.js";
import UserIDContext from "./UserIDContext.js";

export default function Chat() {
  const userID = useContext(UserIDContext);

  return userID ? (
    <div>
      <div className="break-word font-bold text-5xl">{userID}</div>
      <SaSTextForm typeText="manifest" />
      <ChatList />
    </div>
  ) : (
    <></>
  );
}

