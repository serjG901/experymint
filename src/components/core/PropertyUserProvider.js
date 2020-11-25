import React, { useEffect, useState, useContext } from "react";
import { useUserID } from "./UserIDProvider";
import { getUserData, updateUserData } from "../../lib/usersData";

const PropertyUserContext = React.createContext();

export const usePropertyUser = () => {
  return useContext(PropertyUserContext).propertyUser;
};

export const usePropertyUserSet = () => {
  return useContext(PropertyUserContext).setPropertyUser;
};

export const useNamePropertyUserSet = () => {
  return useContext(PropertyUserContext).setNamePropertyUser;
};

export const PropertyUserProvider = ({ children }) => {
  const userID = useUserID();
  const [propertyUser, setPropertyUser] = useState(null);
  const [namePropertyUser, setNamePropertyUser] = useState(null);

  useEffect(() => {
    if (!namePropertyUser) return;
    const userData = getUserData(userID);
    console.log(userData, namePropertyUser);
    setPropertyUser(userData[namePropertyUser]);
  }, [namePropertyUser, userID]);

  useEffect(() => {
    if (!namePropertyUser || namePropertyUser === "name") return;
    updateUserData(userID, namePropertyUser, propertyUser);
  }, [userID, propertyUser, namePropertyUser]);

  return (
    <PropertyUserContext.Provider
      value={{ propertyUser, setPropertyUser, setNamePropertyUser }}
    >
      {children}
    </PropertyUserContext.Provider>
  );
};
