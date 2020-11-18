import React, { useContext } from "react";
import UserIDContext from "./UserIDContext.js";
import ThemeColorContext from "./ThemeColorContext.js";

export default function Message({ msg, onDeleteMessage }) {
  const userID = useContext(UserIDContext);
  const themeColor = useContext(ThemeColorContext);

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

  const Right = () => (
    <div className={styleRight}>
      <div onClick={() => onDeleteMessage(msg.id)} className={styleDelete}>
        x
      </div>
      <p className="text-lg w-11/12 break-word">{msg.text}</p>
      <div className="text-xs text-right text-gray-700">
        {new Date(msg.date).toLocaleString()}{" "}
      </div>
    </div>
  );

  const Left = () => (
    <div className={styleLeft}>
      <p className="text-lg break-word">{msg.text}</p>
      <div className="text-xs text-left text-gray-700">
        {new Date(msg.date).toLocaleString()}{" "}
      </div>
    </div>
  );

  return userID === msg.from ? <Right /> : <Left />;
}
