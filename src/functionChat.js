const reducer = (accumulator, currentValue) => accumulator + currentValue;

function getCloseIndex(userResults, anyResults) {
  const arrKeysUserResults = Object.keys(userResults);
  let arrIndex = [];
  arrKeysUserResults.forEach((key) => {
    if (anyResults.hasOwnProperty(key)) {
      const diff = 1 - Math.abs(userResults[key] - anyResults[key]);
      arrIndex = [...arrIndex, diff];
    }
  });
  const closeIndex =
    arrIndex.length !== 0
      ? Math.floor((arrIndex.reduce(reducer) / arrIndex.length) * 100)
      : 0;
  return closeIndex;
}

export { getCloseIndex };
