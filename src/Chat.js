import React, { useEffect, useState, useContext } from "react";
import { getUserData } from "./UsersData.js";
import ChatList from "./ChatList.js";
import SaSTextForm from "./SaSTextForm.js";
import ThemeColorContext from "./ThemeColorContext.js";

export default function Chat({ userID }) {
  const themeColor = useContext(ThemeColorContext);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(getUserData(userID));
  }, [userID]);

  function handleChangeData() {}

  return userData ? (
    <div
      className={`
          h-screen
          App
          text-white
          bg-gradient-to-b 
          from-${themeColor}-500
          via-${themeColor}-600 
          to-${themeColor}-300
          `}
    >
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
