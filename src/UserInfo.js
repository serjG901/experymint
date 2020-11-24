import React from "react";
import { useUserID } from "./UserIDProvider";
import FormSendAndShowText from "./FormSendAndShowText";

export default function UserInfo() {
  const userID = useUserID();
  return (
    <div className="w-1/2">
      <div className="break-word text-5xl font-bold">{userID}</div>
      <FormSendAndShowText typeText="tags" />
    </div>
  );
}
