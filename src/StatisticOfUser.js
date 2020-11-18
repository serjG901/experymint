import React, { useState, useEffect, useContext } from "react";
import { getAllResultsReduce, getInQ } from "./getIndexFunctions";
import { getUserData, getDataForType } from "./UsersData.js";
import UserIDContext from "./UserIDContext.js";
import ShowTextData from "./ShowTextData.js";
import SaSTextForm from "./SaSTextForm.js";

export default function StatisticOfUser({ isDataChange = true }) {
  const userID = useContext(UserIDContext);
  const [userData, setUserData] = useState({});
  const [resultsData, setResultsData] = useState({});
  const [inQ, setInQ] = useState(0);
  const [changeData, setChangeData] = useState(true);

  useEffect(() => {
    const allResults = getAllResultsReduce(resultsData);
    const userResults = userData.results;
    if (allResults && userResults) {
      setInQ(getInQ(userResults, allResults));
    }
  }, [resultsData, userData]);

  useEffect(() => {
    setResultsData(getDataForType(userID, "results"));
    setUserData(getUserData(userID));
  }, [userID, changeData, isDataChange]);

  function handleChangeData() {
    setChangeData(!changeData);
  }

  return (
    <div className="w-1/2">
      <div title="The amount of your choice" className="text-black text-xl">
        <span className="text-gray-700">Score:</span>
        <span className="font-bold">{userData.score || 0}</span>
      </div>
      <div title="The amount of your mistruth" className="text-black text-xl">
        <span className="text-gray-700">Mistruth:</span>
        <span className="font-bold">{userData.mistruth || 0}</span>
      </div>
      <div title="The uniqum index of you" className="text-black text-xl">
        <span className="text-gray-700">Unique:</span>
        <span className="font-bold">{inQ || 0}</span>
      </div>
      <ShowTextData typeText={"Filtred by"}>
        {userData.filter || "all"}
      </ShowTextData>
      <SaSTextForm onChangeData={handleChangeData} typeText="filter" />
    </div>
  );
}
