const reducer = (accumulator, currentValue) => accumulator + currentValue;

function getIndexOfClosest(userResults, anyResults) {
  const arrKeysUserResults = Object.keys(userResults);
  let arrIndex = [];
  arrKeysUserResults.forEach((key) => {
    if (anyResults.hasOwnProperty(key)) {
      const diff = 1 - Math.abs(userResults[key] - anyResults[key]);
      arrIndex = [...arrIndex, diff];
    }
  });
  const indexOfClosest =
    arrIndex.length !== 0
      ? Math.floor((arrIndex.reduce(reducer) / arrIndex.length) * 100)
      : 0;
  return indexOfClosest;
}

export { getIndexOfClosest };
