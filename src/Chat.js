import React, { useEffect, useState, useContext } from "react";
import { getUserData } from "./UsersData.js";
import ChatList from "./ChatList.js";
import SaSTextForm from "./SaSTextForm.js";
import UserIDContext from "./UserIDContext.js";

export default function Chat() {
  const userID = useContext(UserIDContext);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(getUserData(userID));
  }, [userID]);

  function handleChangeData() {}

  return userData ? (
    <div>
      <div
        className={`
            break-word
            font-bold
            text-5xl
            `}
      >
        {userData.name}
      </div>
      <SaSTextForm
        onChangeData={handleChangeData}
        userID={userID}
        typeText="manifest"
      />
      <ChatList userID={userID} />
    </div>
  ) : (
    <div></div>
  );
}
