import React, { useState, useContext } from "react";
import ThemeColorContext from "./ThemeColorContext.js";

export default function ChatListItem({ userData }) {
  const themeColor = useContext(ThemeColorContext);

  const [openBody, setOpenBody] = useState(false);

  function handleOpenBody() {
    setOpenBody(!openBody);
  }

  return (
    <div
      key={userData.name}
      onClick={handleOpenBody}
      className={`
        cursor-pointer
        bg-${themeColor}-200 
        hover:bg-${themeColor}-400 
        text-black
        `}
      title="click for see user info"
    >
      <div className="flex items-center p-2 my-2">
        <div className="flex w-1/2 items-center">
          <div title="name" className="flex-1 font-bold w-1/2 break-word">
            {userData.name}
          </div>
          <div className={`flex-1`}>
            <div title="index of closest">IC:{userData.indexOfClosest}</div>
            <div title="mistruth">MT:{userData.mistruth}</div>
            <div title="score">S:{userData.score}</div>
          </div>
        </div>
        <div title="manifest" className="w-1/2 font-bold break-words">
          {userData.manifest}
        </div>
      </div>
      <div className={openBody ? "" : "hidden"}>
        <div className={`flex`}>
          <div title="avatar" className="w-1/3 p-4">
            {userData.avatar ? <img src={userData.avatar} alt="avatar" /> : ""}
          </div>
          <div className="w-2/3 p-4" title="tags">
            <span className="text-white">tags:</span>
            <p className="font-bold break-words">
              {userData.tags || "no tags"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
