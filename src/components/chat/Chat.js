import React from "react";
import ChatList from "./ChatList";
import FormSendAndShowText from "../common/FormSendAndShowText";
import { PropertyUserProvider } from "../core/PropertyUserProvider";
import UserName from "../account/UserName";

export default function Chat() {
  return (
    <div>
      <PropertyUserProvider>
        <UserName />
      </PropertyUserProvider>
      <PropertyUserProvider>
        <FormSendAndShowText nameProperty="manifest" />
      </PropertyUserProvider>
      <ChatList />
    </div>
  );
}
