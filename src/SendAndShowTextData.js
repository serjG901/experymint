import React, { useEffect, useState } from "react";
import { getUserData, updateUserData } from "./UsersData.js";
import SendAndShowTextDataForm from "./SendAndShowTextDataForm.js";

export default function SendAndShowTextData({
  userID,
  typeTextData,
  onChangeData
}) {
  const [statusInput, setStatusInput] = useState(false);
  const [userData, setUserData] = useState(() => {
    return {};
  });

  useEffect(() => {
    setUserData(getUserData(userID));
  }, [userID]);

  function handleSubmit(event) {
    event.preventDefault();
    const dataSource = event.target.elements[typeTextData].value.trim();
    const statusUpdate = updateUserData(userID, typeTextData, dataSource);
    if (statusUpdate) {
      setUserData(getUserData(userID));
      onChangeData();
      event.target.elements[typeTextData].value = "";
      setStatusInput(true);
    }
    setStatusInput(false);
    return;
  }

  return userData ? (
    <SendAndShowTextDataForm
      onSubmit={handleSubmit}
      statusInput={statusInput}
      setStatusInput={setStatusInput}
      typeTextData={typeTextData}
      userData={userData}
    ></SendAndShowTextDataForm>
  ) : (
    <></>
  );
}
