import React, { useContext } from "react";
import UserIDContext from "./UserIDContext.js";
import SaSTextForm from "./SaSTextForm.js";

export default function UserInfo() {
  const userID = useContext(UserIDContext);
  return (
    <div className="w-1/2">
      <div className="break-word text-5xl font-bold">{userID}</div>
      <SaSTextForm typeText="tags" />
    </div>
  );
}
