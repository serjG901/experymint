import React, { useState, useContext } from "react";
import ThemeColorContext from "./ThemeColorContext.js";

export default function ChatListItem({ userData }) {
  const themeColor = useContext(ThemeColorContext);
  const [openBody, setOpenBody] = useState(false);
  const [mouseInBody, setMouseInBody] = useState(false);

  function handleOpenBody() {
    if (mouseInBody) return;
    setOpenBody(!openBody);
  }

  return (
    <div
      key={userData.name}
      title="Click for see user info"
      className={`
        cursor-pointer
        bg-${themeColor}-200 
        hover:bg-${themeColor}-400 
        text-black
        `}
      onClick={handleOpenBody}
    >
      <div className="flex items-center p-2 my-2">
        <div className="flex w-1/2 items-center">
          <div title="Name" className="flex-1 font-bold w-1/2 break-word">
            {userData.name}
          </div>
          <div className={`flex-1`}>
            <div title="Index of closest">
              <span className="text-gray-700">IC:</span>
              {userData.indexOfClosest.IC}
            </div>
            <div title="Amount of compared pictures">
              <span className="text-gray-700">Am:</span>
              {userData.indexOfClosest.amount}
            </div>
            <div title="Mistruth">
              <span className="text-gray-700">MT:</span>
              {userData.mistruth}
            </div>
          </div>
        </div>
        <div title="Manifest" className="w-1/2 font-bold break-words">
          {userData.manifest}
        </div>
      </div>
      <div
        className={openBody ? "" : "hidden"}
        onMouseOver={() => setMouseInBody(true)}
        onMouseOut={() => setMouseInBody(false)}
      >
        <div className={`flex cursor-default`}>
          <div title="Avatar" className="w-1/3 p-4">
            {userData.avatar ? <img src={userData.avatar} alt="avatar" /> : ""}
          </div>
          <div title="Tags" className="w-2/3 p-4">
            <span className="text-gray-700">tags</span>
            <p className="font-bold break-words">
              {userData.tags || "no tags"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
