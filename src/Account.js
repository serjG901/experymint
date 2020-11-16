import React, { useContext } from "react";
import AvatarOfUser from "./AvatarOfUser.js";
import InfoOfUser from "./InfoOfUser.js";
import UserIDContext from "./UserIDContext.js";

export default function Account() {
  const userID = useContext(UserIDContext);

  return userID ? (
    <div>
      <div className="flex">
        <AvatarOfUser userID={userID} />
        <InfoOfUser userID={userID} />
      </div>
    </div>
  ) : (
    <></>
  );
}
