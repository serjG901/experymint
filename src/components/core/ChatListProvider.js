import React, { useEffect, useState, useContext } from "react";
import { useUser } from "./UserProvider";
import { getClosestUsers } from "../../lib/getIndexFunctions";
import { useOtherUsers } from "../core/OtherUsersProvider";

const ChatListContext = React.createContext();

export const useChatList = () => {
  return useContext(ChatListContext);
};

export const ChatListProvider = ({ children }) => {
  const user = useUser();
  const otherUsers = useOtherUsers();

  const [chatList, setChatList] = useState(null);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0 && otherUsers) {
      const closestUsers = getClosestUsers(user, otherUsers);
      setChatList(closestUsers);
    }
  }, [user, otherUsers]);

  return (
    <ChatListContext.Provider value={chatList}>
      {children}
    </ChatListContext.Provider>
  );
};
