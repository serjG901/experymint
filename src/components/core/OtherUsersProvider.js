import React, { useEffect, useState, useContext } from "react";
import { useUser } from "./UserProvider";
import { getOtherUsers } from "../../lib/fetchData";

const OtherUsersContext = React.createContext();

export const useOtherUsers = () => {
  return useContext(OtherUsersContext);
};

export const OtherUsersProvider = ({ children }) => {
  const user = useUser();
  const [otherUsers, setOtherUsers] = useState(null);

  useEffect(() => {
    if (user.name) {
      getOtherUsers(user.filter).then((otherUsersData) => {
        setOtherUsers(otherUsersData);
      });
    }
  }, [user]);

  return (
    <OtherUsersContext.Provider value={otherUsers}>
      {children}
    </OtherUsersContext.Provider>
  );
};
