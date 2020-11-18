import React, { useContext } from "react";
import AvatarOfUser from "./AvatarOfUser.js";
import UserIDContext from "./UserIDContext.js";
import UserInfo from "./UserInfo.js";
import StatisticOfUser from "./StatisticOfUser.js";

export default function Account() {
  const userID = useContext(UserIDContext);

  return userID ? (
    <div>
      <div className="flex flex-col">
        <AvatarOfUser />
        <div className="flex justify-center">
          <UserInfo />
          <StatisticOfUser />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
