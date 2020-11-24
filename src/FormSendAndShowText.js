import React, { useEffect, useState } from "react";
import { getUserData, updateUserData } from "./usersData";
import TextInput from "./TextInput";
import SendButton from "./SendButton";
import { useUserID } from "./UserIDProvider";

export default function FormSendAndShowText({
  typeText,
  onChangeData = () => {}
}) {
  const userID = useUserID();
  const [statusInput, setStatusInput] = useState(false);
  const [userData, setUserData] = useState({});
  const [draftInput, setDraftInput] = useState("");

  useEffect(() => setUserData(getUserData(userID)), [userID]);

  function handleSubmit(event) {
    event.preventDefault();
    const dataSource = draftInput.trim();
    const statusUpdate = updateUserData(userID, typeText, dataSource);
    if (statusUpdate) {
      setUserData(getUserData(userID));
      onChangeData();
      setDraftInput("");
      setStatusInput(true);
    }
    setStatusInput(false);
    return;
  }

  function handleChange(event) {
    setDraftInput(event.target.value);
  }

  return userData ? (
    <form className="p-2 mb-2" onSubmit={handleSubmit}>
      <label
        htmlFor={typeText}
        title={statusInput ? "" : `Click to change your ${typeText}`}
        className="block text-sm cursor-pointer"
        onClick={() => setStatusInput(!statusInput)}
      >
        <span className="font-bold">{typeText}</span>
        <p
          className={
            statusInput
              ? "break-words text-black"
              : `break-words text-black text-2xl font-bold`
          }
        >
          {userData[typeText]}
        </p>
      </label>
      {statusInput ? (
        <>
          <TextInput
            typeText={typeText}
            onChange={handleChange}
            value={draftInput}
          />
          <SendButton>Send</SendButton>
        </>
      ) : null}
    </form>
  ) : null;
}
