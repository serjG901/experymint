import React, { useEffect, useState, useContext } from "react";
import { useUserID } from "./UserIDProvider";
import { getDataForType } from "../../lib/usersData";

const PropertyOtherUsersContext = React.createContext();

export const usePropertyOtherUsers = () => {
  return useContext(PropertyOtherUsersContext).propertyOtherUsers;
};

export const useNamePropertyOtherUsersSet = () => {
  return useContext(PropertyOtherUsersContext).setNamePropertyOtherUsers;
};

export const PropertyOtherUsersProvider = ({ children }) => {
  const userID = useUserID();
  const [propertyOtherUsers, setPropertyOtherUsers] = useState(null);
  const [namePropertyOtherUsers, setNamePropertyOtherUsers] = useState(null);

  useEffect(() => {
    if (!namePropertyOtherUsers) return;
    const otherUsersData = getDataForType(userID, namePropertyOtherUsers);
    setPropertyOtherUsers(otherUsersData);
  }, [namePropertyOtherUsers, userID]);

  return (
    <PropertyOtherUsersContext.Provider
      value={{ propertyOtherUsers, setNamePropertyOtherUsers }}
    >
      {children}
    </PropertyOtherUsersContext.Provider>
  );
};
