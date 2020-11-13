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
  let arrInQ = [];
  arrKeysUserResults.forEach((key) => {
    if (allResults.hasOwnProperty(key)) {
      const diff = Math.abs(userResults[key] - allResults[key]);
      arrInQ = [...arrInQ, diff];
    }
  });
  const inQ =
    arrInQ.length !== 0
      ? Math.floor((arrInQ.reduce(reducer) / arrInQ.length) * 100)
      : 0;
  return inQ;
}

export { reduceImageData, getInQ };
