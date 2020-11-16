import React, { useEffect, useState, useContext } from "react";
import { getUserData, getDataForType } from "./UsersData.js";
import { reduceImageData, getInQ } from "./functionAccount.js";
import SaSTextForm from "./SaSTextForm.js";
import AccountAvatar from "./AccountAvatar.js";

const textStyle = (color) => {
  return `
    text-${color}
    font-bold
    text-xl
    `;
};

function DivMain({ children }) {
  return <div>{children}</div>;
}

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
    <DivMain>
      <div className="flex">
        <AccountAvatar userID={userID} />
        <div className="flex-1 w-1/4">
          <div className="break-word font-bold text-5xl">{userData.name}</div>
          <div title="the amount of your choice" className={textStyle(`black`)}>
            Score:{userData.score || 0}
          </div>
          <div
            title="the amount of your mistruth"
            className={textStyle(`black`)}
          >
            Mistruth:{userData.mistruth || 0}
          </div>
          <div title="the uniqum index of you" className={textStyle(`black`)}>
            Unique:{inQ || 0}
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
    </DivMain>
  ) : (
    <DivMain>""</DivMain>
  );
}

export default Account;
