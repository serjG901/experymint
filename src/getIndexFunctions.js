const reducer = (accumulator, currentValue) => accumulator + currentValue;

export function getAllResultsReduce(resultsData) {
  const usersID = Object.keys(resultsData);
  const allResults = {};
  usersID.forEach((userID) => {
    const imagesIDAll = Object.keys(allResults);
    const imagesIDFromUser = Object.keys(resultsData[userID]);
    if (imagesIDAll.length) {
      imagesIDAll.forEach((imageIDAll) => {
        imagesIDFromUser.forEach((imageIDFromUser) => {
          if (imageIDAll !== imageIDFromUser) {
            allResults[imageIDFromUser] = allResults[imageIDFromUser] || [
              resultsData[userID][imageIDFromUser]
            ];
          } else {
            allResults[imageIDAll] = [
              ...allResults[imageIDAll],
              resultsData[userID][imageIDFromUser]
            ];
          }
        });
      });
    } else {
      const imagesIDAllFirst = Object.keys(resultsData[userID]);
      imagesIDAllFirst.forEach((imageIDAll) => {
        allResults[imageIDAll] = [resultsData[userID][imageIDAll]];
      });
    }
  });
  const imagesID = Object.keys(allResults);
  const allResultsReduce = {};
  imagesID.forEach((imageID) => {
    const length = allResults[imageID].length;
    allResultsReduce[imageID] = allResults[imageID].reduce(reducer) / length;
  });
  return allResultsReduce;
}

export function getInQ(userResults, allResults) {
  const arrKeysUserResults = Object.keys(userResults);
  const arrInQ = arrKeysUserResults.map((key) => {
    if (allResults.hasOwnProperty(key))
      return Math.abs(userResults[key] - allResults[key]);
    return null;
  });
  const clearArrInQ = arrInQ.filter((item) => item !== null);
  const inQ =
    clearArrInQ.length !== 0
      ? Math.round((clearArrInQ.reduce(reducer) / clearArrInQ.length) * 100)
      : 0;
  return inQ;
}

export function getIndexOfClosest(userResults, anyResults) {
  const arrKeysUserResults = Object.keys(userResults);
  const arrIndex = arrKeysUserResults.map((key) => {
    if (anyResults.hasOwnProperty(key)) {
      return 1 - Math.abs(userResults[key] - anyResults[key]);
    }
    return null;
  });
  const clearArrIndex = arrIndex.filter((item) => item !== null);
  const indexOfClosest =
    clearArrIndex.length !== 0
      ? Math.round((clearArrIndex.reduce(reducer) / clearArrIndex.length) * 100)
      : 0;
  return { IC: indexOfClosest, amount: clearArrIndex.length };
}

export function getClosestUsers(userData, resultsData) {
  const usersID = Object.keys(resultsData);
  const closestUsers = usersID.map((userID) => {
    return {
      name: userID,
      indexOfClosest: getIndexOfClosest(userData.results, resultsData[userID])
    };
  });
  closestUsers.sort((a, b) => {
    return b.indexOfClosest.IC - a.indexOfClosest.IC;
  });
  return closestUsers;
}
