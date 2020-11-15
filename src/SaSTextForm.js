import React, { useEffect, useState } from "react";
import { getUserData, updateUserData } from "./UsersData.js";
import SaSTextFormLabel from "./SaSTextFormLabel.js";
import SaSTextFormText from "./SaSTextFormText.js";
import TextInput from "./TextInput.js";
import SendButton from "./SendButton.js";

export default function SaSText({ userID, typeText, onChangeData }) {
  const [statusInput, setStatusInput] = useState(false);
  const [userData, setUserData] = useState(() => {
    return {};
  });

  useEffect(() => {
    setUserData(getUserData(userID));
  }, [userID]);

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
    <form className="px-2 pt-2 pb-2 mb-2" onSubmit={handleSubmit}>
      <SaSTextFormLabel
        typeText={typeText}
        statusInput={statusInput}
        setStatusInput={setStatusInput}
      >
        <SaSTextFormText
          statusInput={statusInput}
          userData={userData}
          typeText={typeText}
        />
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
