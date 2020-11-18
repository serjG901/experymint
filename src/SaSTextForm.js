import React, { useEffect, useState, useContext } from "react";
import { getUserData, updateUserData } from "./UsersData.js";
import SaSTextFormLabel from "./SaSTextFormLabel.js";
import SaSTextFormText from "./SaSTextFormText.js";
import TextInput from "./TextInput.js";
import SendButton from "./SendButton.js";
import UserIDContext from "./UserIDContext.js";

export default function SaSText({ typeText, onChangeData = () => {} }) {
  const userID = useContext(UserIDContext);
  const [statusInput, setStatusInput] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => setUserData(getUserData(userID)), [userID]);

  function handleSubmit(event) {
    event.preventDefault();
    const dataSource = event.target.elements[typeText].value.trim();
    const statusUpdate = updateUserData(userID, typeText, dataSource);
    if (statusUpdate) {
      setUserData(getUserData(userID));
      onChangeData();
      event.target.elements[typeText].value = "";
      setStatusInput(true);
    }
    setStatusInput(false);
    return;
  }

  return userData ? (
    <form className="p-2 mb-2" onSubmit={handleSubmit}>
      <SaSTextFormLabel
        typeText={typeText}
        statusInput={statusInput}
        setStatusInput={setStatusInput}
      >
        <SaSTextFormText typeText={typeText} statusInput={statusInput}>
          {userData[typeText]}
        </SaSTextFormText>
      </SaSTextFormLabel>
      {statusInput ? (
        <>
          <TextInput typeText={typeText} />
          <SendButton>Send</SendButton>
        </>
      ) : (
        <></>
      )}
    </form>
  ) : (
    <></>
  );
}
