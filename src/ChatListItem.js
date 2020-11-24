import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import OtherUserChat from "./OtherUserChat";
import OtherUser from "./OtherUser";
import OtherUserInfo from "./OtherUserInfo";

export default function ChatListItem({ userData }) {
  const themeColor = useTheme();

  const [openOtherUserInfoAndChat, setOpenOtherUserInfoAndChat] = useState(
    false
  );

  function handleOpenBody() {
    setOpenOtherUserInfoAndChat(!openOtherUserInfoAndChat);
  }

  return (
    <div
      key={userData.name}
      title={openOtherUserInfoAndChat ? "" : "Click for open user info"}
      className={
        openOtherUserInfoAndChat
          ? `${themeColor.bg400} text-black shadow-md`
          : `${themeColor.bg200} text-black shadow-md`
      }
    >
      <div
        className={`cursor-pointer ${themeColor.hbg500}`}
        onClick={handleOpenBody}
      >
        <OtherUser
          name={userData.name}
          indexOfClosest={userData.indexOfClosest}
          mistruth={userData.mistruth}
          manifest={userData.manifest}
        />
      </div>
      <div className={openOtherUserInfoAndChat ? "" : "hidden"}>
        <OtherUserInfo
          indexOfClosest={userData.indexOfClosest}
          mistruth={userData.mistruth}
          avatar={userData.avatar}
          tags={userData.tags}
        />
        <OtherUserChat
          isOpen={openOtherUserInfoAndChat}
          otherUserID={userData.name}
        />
      </div>
    </div>
  );
}
