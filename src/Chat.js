import React from "react";
import ChatList from "./ChatList";
import FormSendAndShowText from "./FormSendAndShowText";
import { useUserID } from "./UserIDProvider";

export default function Chat() {
  const userID = useUserID();

  return userID ? (
    <div>
      <div className="break-word font-bold text-5xl">{userID}</div>
      <FormSendAndShowText typeText="manifest" />
      <ChatList />
    </div>
  ) : null;
}
