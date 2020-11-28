import React, { useState, useEffect, useContext } from "react";
import {
  getAllResultsReduce,
  getUniqumIndex
} from "../../lib/getIndexFunctions";
import { useUser } from "./UserProvider";
import { useOtherUsers } from "./OtherUsersProvider";
import { usePushUpSet } from "../core/PushUpProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";

const UniqueIndexContext = React.createContext();

export const useUniqueIndex = () => {
  return useContext(UniqueIndexContext).uniqueIndex;
};

export function UniqueIndexProvider({ children }) {
  const user = useUser();
  const otherUsers = useOtherUsers();
  const setPushUp = usePushUpSet();
  const setPushUpError = usePushUpErrorSet();

  const [uniqueIndex, setUniqueIndex] = useState(0);

  useEffect(() => {
    if (user && otherUsers) {
      setPushUp("Computing all users results...");
      getAllResultsReduce(otherUsers)
        .then((allResults) => {
          setPushUp("Computing your unique index...");
          getUniqumIndex(user.results, allResults);
        })
        .then((uniqueIndex) => {
          setPushUp(null);
          setUniqueIndex(uniqueIndex);
        })
        .catch((error) => {
          setPushUpError(error.message);
        });
    }
  }, [user, otherUsers, setPushUp]);

  return (
    <UniqueIndexContext.Provider value={{ uniqueIndex }}>
      {children}
    </UniqueIndexContext.Provider>
  );
}
