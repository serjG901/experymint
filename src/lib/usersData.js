import { User } from "./currentUser";

const localDataUsers =
  new Map(JSON.parse(window.localStorage.getItem("dataUsers"))) || new Map();

let dataUsers = new Map();

if (localDataUsers.size > 0) {
  for (let entry of localDataUsers) {
    dataUsers.set(entry[0], entry[1]);
  }
}

export function isNameFree(name) {
  return !dataUsers.has(name);
}

export function addDataInStorage() {
  let err = false;
  try {
    window.localStorage.setItem(
      "dataUsers",
      JSON.stringify(Array.from(dataUsers.entries()))
    );
  } catch (e) {
    console.log(e);
    err = e;
  }
  if (err) return false;
  return true;
}

export function setUserData({ name, pass }) {
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
  if (!dataUsers.has(name)) {
    dataUsers.set(name, user);
    const statusSavedData = addDataInStorage();
    if (statusSavedData) {
      User.currentID = name;
      console.log(User.currentID);
      return true;
    }
    dataUsers.delete(name);
    return false;
  } else {
    return false;
  }
}

export function isPasswordCorrect({ name, pass }) {
  const user = dataUsers.get(name);
  if (user.pass !== pass) return false;
  User.currentID = name;
  console.log(User.currentID);
  return true;
}

export function getUserData(userID) {
  const userData = dataUsers.get(userID);
  return { ...userData, pass: "***" };
}

export function addResultInUser(results, numberImage, choice) {
  let newMistruth = false;
  if (results.hasOwnProperty(numberImage)) {
    newMistruth = results[numberImage] !== choice;
    const newResults = {
      ...results,
      [numberImage]: choice
    };
    return { newResults, newMistruth };
  }
  const newResults = { ...results, [numberImage]: choice };
  return { newResults, newMistruth };
}

export function updateUserResults(userID, numberImage, choice) {
  const userData = dataUsers.get(userID);
  const { newResults, newMistruth } = addResultInUser(
    userData.results,
    numberImage,
    choice
  );
  const newUserData = {
    ...userData,
    results: newResults,
    score: userData.score + 1,
    mistruth: userData.mistruth + newMistruth
  };
  dataUsers.set(userID, newUserData);
  const statusSavedData = addDataInStorage();
  if (statusSavedData) return true;
  dataUsers.set(userID, userData);
  return false;
}

export function getDataForType(userID, typeData) {
  let outData = {};
  const filterTags = dataUsers.get(userID).filter
    ? dataUsers.get(userID).filter.toLowerCase()
    : "";

  for (let entry of dataUsers) {
    if (entry[0] !== userID) {
      if (entry[1]["tags"].toLowerCase().indexOf(filterTags) !== -1)
        outData = { ...outData, [entry[0]]: entry[1][typeData] };
    }
  }
  return outData;
}

export function updateUserData(userID, typeData, dataSource) {
  const userData = dataUsers.get(userID);
  const newUserData = {
    ...userData,
    [typeData]: dataSource
  };
  dataUsers.set(userID, newUserData);
  const statusSavedData = addDataInStorage();
  if (statusSavedData) return true;
  dataUsers.set(userID, userData);
  return false;
}

export function updateUser(userID, user) {
  //console.log(userID, user);
  const userData = dataUsers.get(userID);
  const newUserData = {
    ...user,
    pass: userData.pass
  };
  dataUsers.set(userID, newUserData);
  const statusSavedData = addDataInStorage();
  if (statusSavedData) return true;
  dataUsers.set(userID, userData);
  return false;
}

export function getOtherUsersResults(userID, filter) {
  let otherUsersResults = {};
  const filterTags = filter ? filter.toLowerCase() : "";

  for (let entry of dataUsers) {
    if (entry[0] !== userID) {
      if (entry[1]["tags"].toLowerCase().indexOf(filterTags) !== -1)
        otherUsersResults = {
          ...otherUsersResults,
          [entry[0]]: entry[1].results
        };
    }
  }
  return otherUsersResults;
}

export function getOtherUsers(userID, filter) {
  let otherUsersInfo = {};
  const filterTags = filter ? filter.toLowerCase() : "";

  for (let entry of dataUsers) {
    if (entry[0] !== userID) {
      if (entry[1]["tags"].toLowerCase().indexOf(filterTags) !== -1)
        otherUsersInfo = {
          ...otherUsersInfo,
          [entry[0]]: {
            name: entry[1].name,
            manifest: entry[1].manifest,
            mistruth: entry[1].mistruth,
            avatar: entry[1].avatar,
            tags: entry[1].tags,
            results: entry[1].results
          }
        };
    }
  }
  return otherUsersInfo;
}
