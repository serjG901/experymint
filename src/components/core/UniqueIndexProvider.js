import React, { useState, useEffect, useContext } from "react";
import {
  getAllResultsReduce,
  getUniqumIndex
} from "../../lib/getIndexFunctions";
import { useUser } from "./UserProvider";
import { useOtherUsers } from "./OtherUsersProvider";

const UniqueIndexContext = React.createContext();

export const useUniqueIndex = () => {
  return useContext(UniqueIndexContext).uniqueIndex;
};

export function UniqueIndexProvider({ children }) {
  const user = useUser();
  const otherUsers = useOtherUsers();

  const [uniqueIndex, setUniqueIndex] = useState(0);

  useEffect(() => {
    if (user && otherUsers) {
      const allResults = getAllResultsReduce(otherUsers);
      setUniqueIndex(getUniqumIndex(user.results, allResults));
    }
  }, [user, otherUsers]);

  return (
    <UniqueIndexContext.Provider value={{ uniqueIndex }}>
      {children}
    </UniqueIndexContext.Provider>
  );
}
