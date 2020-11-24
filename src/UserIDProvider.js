import React, { useEffect, useState, useContext } from "react";
const UserIDContext = React.createContext();

export const useUserID = () => {
  return useContext(UserIDContext).userID;
};

export const useUserIDSet = () => {
  return useContext(UserIDContext).setCurrentUserID;
};

export const UserIDProvider = ({ children }) => {
  const [currentUserID, setCurrentUserID] = useState(
    window.localStorage.getItem("userID") || null
  );

  useEffect(() => {
    if (currentUserID) {
      window.localStorage.setItem("userID", currentUserID);
      return;
    }
    window.localStorage.removeItem("userID");
  }, [currentUserID]);

  return (
    <UserIDContext.Provider value={{ setCurrentUserID, userID: currentUserID }}>
      {children}
    </UserIDContext.Provider>
  );
};
