import React, { useState, useEffect } from "react";
import { getAllResultsReduce, getUniqumIndex } from "./getIndexFunctions";
import { getUserData, getDataForType } from "./usersData";
import { useUserID } from "./UserIDProvider";
import FormSendAndShowText from "./FormSendAndShowText";

export default function StatisticOfUser({ isDataChange = true }) {
  const userID = useUserID();
  const [userData, setUserData] = useState({});
  const [resultsData, setResultsData] = useState({});
  const [uniqumIndex, setUniqumIndex] = useState(0);
  const [changeData, setChangeData] = useState(true);

  useEffect(() => {
    const allResults = getAllResultsReduce(resultsData);
    const userResults = userData.results;
    if (allResults && userResults) {
      setUniqumIndex(getUniqumIndex(userResults, allResults));
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
        <span className="font-bold">{uniqumIndex || 0}</span>
      </div>
      <p className="px-2 break-words text-black">
        <span className="text-gray-700">Filtred by</span>{" "}
        {userData.filter || "all"}
      </p>
      <FormSendAndShowText onChangeData={handleChangeData} typeText="filter" />
    </div>
  );
}
