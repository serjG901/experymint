import React, { useState, useContext } from "react";
import ThemeColorContext from "./ThemeColorContext.js";
import ChatWithUser from "./ChatWithUser.js";
import InfoOfOtherUser from "./InfoOfOtherUser.js";
import InfoOfOtherUserBody from "./InfoOfOtherUserBody.js";

export default function ChatListItem({ userData }) {
  const themeColor = useContext(ThemeColorContext);

  const [openBody, setOpenBody] = useState(false);

  function handleOpenBody() {
    setOpenBody(!openBody);
  }

  return (
    <div
      key={userData.name}
      title={openBody ? "" : "Click for open user info"}
      className={`${themeColor.bg200} text-black`}
    >
      <div onClick={handleOpenBody}>
        <InfoOfOtherUser
          name={userData.name}
          indexOfClosest={userData.indexOfClosest}
          mistruth={userData.mistruth}
          manifest={userData.manifest}
        />
      </div>
      <div className={openBody ? "" : "hidden"}>
        <InfoOfOtherUserBody avatar={userData.avatar} tags={userData.tags} />
        <ChatWithUser otherUserID={userData.name} />
      </div>
    </div>
  );
}
