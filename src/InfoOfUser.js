import React, { useState, useEffect, useContext } from "react";
import { reduceImageData, getInQ } from "./getIndexFunctions";
import { getUserData, getDataForType } from "./UsersData.js";
import SaSTextForm from "./SaSTextForm.js";
import UserIDContext from "./UserIDContext.js";

export default function InfoOfUser() {
  const userID = useContext(UserIDContext);
  const [userData, setUserData] = useState({});
  const [resultsData, setResultsData] = useState({});
  const [inQ, setInQ] = useState(0);
  const [changeData, setChangeData] = useState(true);

  useEffect(() => {
    const allResults = reduceImageData(resultsData);
    const userResults = userData.results;
    if (allResults && userResults) {
      setInQ(getInQ(userResults, allResults));
    }
  }, [resultsData, userData]);

  useEffect(() => {
    setResultsData(getDataForType(userID, "results"));
    setUserData(getUserData(userID));
  }, [userID, changeData]);

  function handleChangeData() {
    setChangeData(!changeData);
  }

  return (
    <div className="flex-1">
      <div className="break-word text-5xl font-bold">{userData.name}</div>
      <div className="font-bold">
        <div title="The amount of your choice" className="text-black text-xl">
          Score:{userData.score || 0}
        </div>
        <div title="The amount of your mistruth" className="text-black text-xl">
          Mistruth:{userData.mistruth || 0}
        </div>
        <div title="The uniqum index of you" className="text-black text-xl">
          Unique:{inQ || 0}
        </div>
      </div>
      <SaSTextForm onChangeData={handleChangeData} typeText="filter" />
      <SaSTextForm onChangeData={handleChangeData} typeText="tags" />
    </div>
  );
}
