import React, { useState } from "react";

function ChatListItem({ CS, userData }) {
  const [openBody, setOpenBody] = useState(() => {
    return false;
  });

  function handleOpenBody() {
    setOpenBody(!openBody);
  }

  return (
    <div
      key={userData.name}
      onClick={handleOpenBody}
      className={CS.itemChatList}
      title="click for see user info"
    >
      <div className={CS.itemChatListHeader}>
        <div className={CS.itemChatListHeaderLeft}>
          <div title="name" className={CS.itemChatListHeaderLeftName}>
            {userData.name}
          </div>
          <div className={CS.itemChatListHeaderLeftStatistic}>
            <div title="close index">CI:{userData.closeIndex}</div>
            <div title="mistruth">MT:{userData.mistruth}</div>
            <div title="score">S:{userData.score}</div>
          </div>
        </div>
        <div title="manifest" className={CS.itemChatListHeaderRight}>
          {userData.manifest}
        </div>
      </div>
      <div className={openBody ? "" : "hidden"}>
        <div className={CS.itemChatListBody}>
          <div title="avatar" className={CS.itemChatListBodyLeft}>
            {userData.avatar ? <img src={userData.avatar} alt="avatar" /> : ""}
          </div>
          <div className={CS.itemChatListBodyRight} title="tags">
            <span className="text-white">tags:</span>
            <p className="font-bold break-word">{userData.tags || "no tags"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
