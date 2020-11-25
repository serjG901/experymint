import React, { useState } from "react";
import { useTheme } from "../core/ThemeProvider";
import OtherUserChat from "./OtherUserChat";
import OtherUserStatistic from "./OtherUserStatistic";
import OtherUserAvatarAndTags from "./OtherUserAvatarAndTags";
import OtherUserName from "./OtherUserName";
import OtherUserManifest from "./OtherUserManifest";

export default function OtherUser({ userData }) {
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
          ? `${themeColor.bgOtherUserOpen} ${themeColor.colorTextOtherUser} shadow-md`
          : `${themeColor.bgOtherUserClose} ${themeColor.colorTextOtherUser} shadow-md`
      }
    >
      <div
        className={`cursor-pointer ${themeColor.hbgOtherUser}`}
        onClick={handleOpenBody}
      >
        <div className={`flex p-2 my-2`}>
          <OtherUserName>{userData.name}</OtherUserName>
          <OtherUserManifest>{userData.manifest}</OtherUserManifest>
        </div>
      </div>
      <div className={openOtherUserInfoAndChat ? "cursor-default" : "hidden"}>
        <OtherUserStatistic
          indexOfClosest={userData.indexOfClosest}
          mistruth={userData.mistruth}
        />
        <OtherUserAvatarAndTags avatar={userData.avatar} tags={userData.tags} />
        <OtherUserChat
          isOpen={openOtherUserInfoAndChat}
          otherUserID={userData.name}
        />
      </div>
    </div>
  );
}
