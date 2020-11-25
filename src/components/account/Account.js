import React from "react";
import Avatar from "./Avatar";
import { PropertyUserProvider } from "../core/PropertyUserProvider";
import UserInfo from "./UserInfo";
import StatisticOfUser from "./StatisticOfUser";

export default function Account() {
  return (
    <div>
      <div className="flex flex-col">
        <PropertyUserProvider>
          <Avatar />
        </PropertyUserProvider>
        <div className="flex justify-center">
          <UserInfo />
          <StatisticOfUser />
        </div>
      </div>
    </div>
  );
}
