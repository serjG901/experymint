const localData =
  new Map(JSON.parse(window.localStorage.getItem("data"))) || new Map();

let data = new Map();

let arrData = [];

if (localData.size > 0) {
  for (let entry of localData) {
    data.set(entry[0], entry[1]);
  }
}

for (let entry of data) {
  arrData = [...arrData, entry];
}

function isNameFree(name) {
  return !data.has(name);
}

function addDataInStorage() {
  let err = false;
  try {
    window.localStorage.setItem(
      "data",
      JSON.stringify(Array.from(data.entries()))
    );
  } catch (e) {
    console.log(e);
    err = e;
  }
  if (err) return false;
  return true;
}

function setUserData({ name, pass }) {
  const user = {
    name,
    pass,
    results: {},
    score: 0,
    mistruth: 0,
    manifest: "",
    tags: "",
    filter: ""
  };
  if (!data.has(name)) {
    data.set(name, user);
    const statusSavedData = addDataInStorage();
    if (statusSavedData) return true;
    data.delete(name);
    return false;
  } else {
    return false;
  }
}

function IsPassCorrect({ name, pass }) {
  if (!data.has(name)) return "Ops, this name does not finded";
  const user = data.get(name);
  if (user.pass !== pass) return false;
  return true;
}

function getUserData(userID) {
  const userData = data.get(userID);
  return { ...userData, pass: "***" };
}

function addResultInUser(results, numberImage, choiceType) {
  let newMistruth = false;
  if (results.hasOwnProperty(numberImage)) {
    newMistruth = results[numberImage] !== choiceType;
    const newResults = {
      ...results,
      [numberImage]: choiceType
    };
    return { newResults, newMistruth };
  }
  const newResults = { ...results, [numberImage]: choiceType };
  return { newResults, newMistruth };
}

function updateUserResults(userID, numberImage, choiceType) {
  const userData = data.get(userID);
  const { newResults, newMistruth } = addResultInUser(
    userData.results,
    numberImage,
    choiceType
  );
  const newUserData = {
    ...userData,
    results: newResults,
    score: userData.score + 1,
    mistruth: userData.mistruth + newMistruth
  };
  data.set(userID, newUserData);
  const statusSavedData = addDataInStorage();
  if (statusSavedData) return true;
  data.set(userID, userData);
  return false;
}

function getDataForType(userID, typeData) {
  let outData = {};
  const filterTags = data.get(userID).filter.toLowerCase();
  for (let entry of data) {
    if (entry[0] !== userID) {
      if (entry[1]["tags"].toLowerCase().indexOf(filterTags) !== -1)
        outData = { ...outData, [entry[0]]: entry[1][typeData] };
    }
  }
  return outData;
}

function updateUserData(userID, typeData, dataSource) {
  const userData = data.get(userID);
  const newUserData = {
    ...userData,
    [typeData]: dataSource
  };
  data.set(userID, newUserData);
  const statusSavedData = addDataInStorage();
  if (statusSavedData) return true;
  data.set(userID, userData);
  return false;
}

export {
  isNameFree,
  setUserData,
  IsPassCorrect,
  getUserData,
  updateUserResults,
  getDataForType,
  updateUserData
};
