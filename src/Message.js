import React, { useEffect } from "react";
import { useUserID } from "./UserIDProvider";
import { useTheme } from "./ThemeProvider";
import { setIsRead } from "./messageData";

export default function Message({ isSeen, msg, onDeleteMessage }) {
  const userID = useUserID();
  const themeColor = useTheme();

  const styleLeft = `
    self-start w-1/2 
    shadow-md
    px-2 m-2 rounded-md 
    text-right text-black 
    ${themeColor.bg300}`;

  const styleRight = `
    relative
    shadow-md
    self-end w-1/2
    px-2 m-2 rounded-md 
    text-left text-white 
    ${themeColor.bg500}`;

  const styleDelete = `
    absolute
    top-0 right-0
    rounded-full 
    w-6 h-6 
    cursor-pointer 
    text-center
    hover:bg-white
    hover:text-gray-700
    `;

  useEffect(() => {
    if (isSeen && userID !== msg.from && !msg.isRead) {
      setIsRead(msg.id);
    }
  }, [isSeen, msg.id, userID, msg.from, msg.isRead]);

  const Right = ({ rmsg }) => (
    <div className={styleRight}>
      {msg.id ? (
        <div onClick={() => onDeleteMessage(rmsg.id)} className={styleDelete}>
          x
        </div>
      ) : null}
      <p className="text-lg w-11/12 break-word">{rmsg.text}</p>
      <div className="text-xs text-right text-gray-700">
        {new Date(rmsg.date).toLocaleString()}{" "}
        {rmsg.isSend ? <>&#10003;</> : null}
        {rmsg.isRead ? <>&#10003;</> : null}
      </div>
    </div>
  );

  const Left = ({ lmsg }) => (
    <div className={styleLeft}>
      <p className="text-lg break-word">{lmsg.text}</p>
      <div className="text-xs text-left text-gray-700">
        {new Date(lmsg.date).toLocaleString()}{" "}
      </div>
    </div>
  );

  return userID === msg.from ? <Right rmsg={msg} /> : <Left lmsg={msg} />;
}
