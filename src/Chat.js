import React, { useEffect, useState } from "react";
import { getUserData } from "./UsersData.js";
import ChatList from "./ChatList.js";
import SendAndShowTextData from "./SendAndShowTextData.js";

function Chat({ CS, userID }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(getUserData(userID));
  }, [userID]);

  function handleChangeData() {}

  return userData ? (
    <div className={CS.Main}>
      <div className={CS.nameUser}>{userData.name}</div>
      <SendAndShowTextData
        onChangeData={handleChangeData}
        userID={userID}
        typeTextData="manifest"
      />
      <ChatList CS={CS} userID={userID} />
    </div>
  ) : (
    <div></div>
  );
}

export default Chat;
