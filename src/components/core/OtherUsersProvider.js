import React, { useEffect, useState, useContext } from "react";
import { useUser } from "./UserProvider";
import { getOtherUsers } from "../../lib/fetchData";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";

const OtherUsersContext = React.createContext();

export const useOtherUsers = () => {
  return useContext(OtherUsersContext);
};

export const OtherUsersProvider = ({ children }) => {
  const user = useUser();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();
  const [otherUsers, setOtherUsers] = useState(null);

  useEffect(() => {
    if (user.name) {
      setPushUp("Refresh other users...");
      getOtherUsers(user.filter)
        .then((otherUsersData) => {
          setPushUp(null);
          setOtherUsers(otherUsersData);
        })
        .catch((error) => {
          setPushUpError(error.message);
        });
    }
  }, [user, setPushUp, setPushUpError]);

  return (
    <OtherUsersContext.Provider value={otherUsers}>
      {children}
    </OtherUsersContext.Provider>
  );
};
