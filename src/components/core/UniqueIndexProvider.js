import React, { useState, useEffect, useContext } from "react";
import {
  getAllResultsReduce,
  getUniqumIndex
} from "../../lib/getIndexFunctions";
import {
  usePropertyUser,
  useNamePropertyUserSet
} from "./PropertyUserProvider";
import {
  usePropertyOtherUsers,
  useNamePropertyOtherUsersSet
} from "./PropertyOtherUsersProvider";

const UniqueIndexContext = React.createContext();

export const useUniqueIndex = () => {
  return useContext(UniqueIndexContext).uniqueIndex;
};

export function UniqueIndexProvider({ children }) {
  const namePropertyUserSet = useNamePropertyUserSet();
  const userResults = usePropertyUser();
  const namePropertyOtherUsersSet = useNamePropertyOtherUsersSet();
  const otherUsersResults = usePropertyOtherUsers();

  useEffect(() => {
    namePropertyUserSet("results");
    namePropertyOtherUsersSet("results");
  });

  const [uniqueIndex, setUniqueIndex] = useState(0);

  useEffect(() => {
    if (otherUsersResults && userResults) {
      const allResults = getAllResultsReduce(otherUsersResults);
      setUniqueIndex(getUniqumIndex(userResults, allResults));
    }
  }, [otherUsersResults, userResults]);

  return (
    <UniqueIndexContext.Provider value={{ uniqueIndex }}>
      {children}
    </UniqueIndexContext.Provider>
  );
}
