import React, { useEffect, useState } from "react";
import { getUserData, getDataForType } from "./UsersData.js";
import { reduceImageData, getInQ } from "./functionAccount.js";
import SaSTextForm from "./SaSTextForm.js";
import AccountAvatar from "./AccountAvatar.js";

function Account({ userID }) {
  const [userData, setUserData] = useState(() => {
    return {};
  });
  const [resultsData, setResultsData] = useState(() => {
    return {};
  });
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
  }, [userID, changeData]);

  useEffect(() => {
    setUserData(getUserData(userID));
  }, [userID, changeData]);

  function handleChangeData() {
    setChangeData(!changeData);
  }

  return userData.name ? (
    <div>
      <div className="flex">
        <AccountAvatar userID={userID} />
        <div className="flex-1">
          <div className="break-word text-5xl font-bold">{userData.name}</div>
          <div className="font-bold">
            <div
              title="the amount of your choice"
              className="text-black text-xl"
            >
              Score:{userData.score || 0}
            </div>
            <div
              title="the amount of your mistruth"
              className="text-black text-xl"
            >
              Mistruth:{userData.mistruth || 0}
            </div>
            <div title="the uniqum index of you" className="text-black text-xl">
              Unique:{inQ || 0}
            </div>
          </div>
          <SaSTextForm
            onChangeData={handleChangeData}
            userID={userID}
            typeText="filter"
          />
          <SaSTextForm
            onChangeData={handleChangeData}
            userID={userID}
            typeText="tags"
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Account;
