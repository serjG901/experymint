import React, { useEffect, useState } from "react";
import {
  isNameFree,
  setUserData,
  isPasswordCorrect
} from "../../lib/usersData";
import SendButton from "../common/SendButton";
import TextInput from "../common/TextInput";
import { useUserIDSet } from "../core/UserIDProvider";
import { useTheme } from "../core/ThemeProvider";

export default function Login() {
  const [myError, setMyError] = useState(false);
  const [nameStatus, setNameStatus] = useState(true);
  const [passwordStatus, setPasswordStatus] = useState(true);
  const [changeName, setChangeName] = useState(false);
  const [nameDraft, setNameDraft] = useState("");
  const [passwordDraft, setPasswordDraft] = useState("");

  const setUserID = useUserIDSet();
  const themeColor = useTheme();

  function handleSubmit(event) {
    event.preventDefault();
    const user = {
      name: nameDraft,
      pass: passwordDraft
    };
    if (nameStatus) {
      const statusDataSaved = setUserData(user);
      if (statusDataSaved) {
        setUserID(user.name);
        return;
      }
      setMyError("Not saved data, try once");
      return;
    }
    const statusLogin = isPasswordCorrect(user);
    setPasswordStatus(statusLogin);
    if (statusLogin) setUserID(user.name);
  }

  useEffect(() => {
    if (nameDraft === "") {
      setChangeName(false);
      setNameStatus(true);
      return;
    }
    setChangeName(true);
    setNameStatus(isNameFree(nameDraft));
  }, [nameDraft]);

  useEffect(() => {
    setPasswordStatus(true);
  }, [passwordDraft]);

  function handleChangeName(event) {
    setNameDraft(event.target.value.trim());
  }

  function handleChangePassword(event) {
    setPasswordDraft(event.target.value.trim());
  }

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className={`${themeColor.colorTextLabel}`}>
          {!changeName
            ? "Unique name"
            : nameStatus
            ? "Good new name"
            : "This name is occupied"}
        </label>
        <TextInput
          nameProperty="name"
          onChange={handleChangeName}
          required
          maxLength={"28"}
          value={nameDraft}
        />
        <label htmlFor="password" className={`${themeColor.colorTextLabel}`}>
          {passwordStatus ? "Password" : "Password is wrong"}
        </label>
        <TextInput
          nameProperty="password"
          type="password"
          onChange={handleChangePassword}
          required
          maxLength={"28"}
          value={passwordDraft}
        />
        <SendButton>Sign in</SendButton>
        <p>{myError ? myError : ""}</p>
      </form>
    </div>
  );
}
