const reducer = (accumulator, currentValue) => accumulator + currentValue;

function reduceImageData(imageData) {
  const arrKeys = Object.keys(imageData);
  const allImage = {};
  arrKeys.forEach((key) => {
    const arrKeysAllImage = Object.keys(allImage);
    const arrKeysImageData = Object.keys(imageData[key]);
    if (arrKeysAllImage.length) {
      arrKeysAllImage.forEach((keyAll) => {
        arrKeysImageData.forEach((keyData) => {
          if (keyAll !== keyData) {
            allImage[keyData] = allImage[keyData]
              ? allImage[keyData]
              : [imageData[key][keyData]];
          } else {
            allImage[keyAll] = [...allImage[keyAll], imageData[key][keyData]];
          }
        });
      });
    } else {
      const arrKeysImageDataFirst = Object.keys(imageData[key]);
      arrKeysImageDataFirst.forEach((keyData) => {
        allImage[keyData] = [imageData[key][keyData]];
      });
    }
  });
  const arrKeysAllImage = Object.keys(allImage);
  arrKeysAllImage.forEach((key) => {
    const length = allImage[key].length;
    allImage[key] = allImage[key].reduce(reducer) / length;
  });
  return allImage;
}

function getInQ(userResults, allResults) {
  const arrKeysUserResults = Object.keys(userResults);
  const arrInQ = arrKeysUserResults.map((key) => {
    if (allResults.hasOwnProperty(key))
      return Math.abs(userResults[key] - allResults[key]);
    return null;
  });
  const clearArrInQ = arrInQ.filter((item) => item !== null);
  const inQ =
    clearArrInQ.length !== 0
      ? Math.floor((clearArrInQ.reduce(reducer) / clearArrInQ.length) * 100)
      : 0;
  return inQ;
}

function getIndexOfClosest(userResults, anyResults) {
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
      ? Math.floor((clearArrIndex.reduce(reducer) / clearArrIndex.length) * 100)
      : 0;
  return { IC: indexOfClosest, amount: clearArrIndex.length };
}

export { reduceImageData, getInQ, getIndexOfClosest };
