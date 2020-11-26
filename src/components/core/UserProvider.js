import React, { useEffect, useState, useContext } from "react";
import { useUserID } from "./UserIDProvider";
import { getUserData, updateUser } from "../../lib/usersData";

const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext).user;
};

export const useUserSet = () => {
  return useContext(UserContext).setUser;
};

export const UserProvider = ({ children }) => {
  const userID = useUserID();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (userID) {
      const userData = getUserData(userID);
      setUser(userData);
    }
  }, [userID]);

  useEffect(() => {
    if (userID && Object.keys(user).length !== 0) {
      updateUser(userID, user);
    }
  }, [userID, user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
