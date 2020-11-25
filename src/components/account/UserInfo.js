import React from "react";
import FormSendAndShowText from "../common/FormSendAndShowText";
import { PropertyUserProvider } from "../core/PropertyUserProvider";
import UserName from "./UserName";

export default function UserInfo() {
  return (
    <div className="w-1/2">
      <PropertyUserProvider>
        <UserName />
      </PropertyUserProvider>
      <PropertyUserProvider>
        <FormSendAndShowText nameProperty="tags" />
      </PropertyUserProvider>
    </div>
  );
}
