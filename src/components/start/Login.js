import React, { useEffect, useState } from "react";
//import { setUserData, isPasswordCorrect } from "../../lib/usersData";
import { isNameFree, login, setUser } from "../../lib/fetchData";
import SendButton from "../common/SendButton";
import TextInput from "../common/TextInput";
import { useLoginSet } from "../core/LoginProvider";
import { useTheme } from "../core/ThemeProvider";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";
import { usePushUpSet } from "../core/PushUpProvider";

export default function Login() {
  const [nameStatus, setNameStatus] = useState(true);
  const [passwordStatus, setPasswordStatus] = useState(true);
  const [changeName, setChangeName] = useState(false);
  const [nameDraft, setNameDraft] = useState("");
  const [passwordDraft, setPasswordDraft] = useState("");

  const setLogin = useLoginSet();
  const themeColor = useTheme();
  const setPushUpError = usePushUpErrorSet();
  const setPushUp = usePushUpSet();

  function handleSubmit(event) {
    event.preventDefault();
    const user = { name: nameDraft, password: passwordDraft };
    setPushUp("Connecting...");
    if (nameStatus) {
      setUser(user)
        .then((statusDataSaved) => {
          setPushUp(null);
          if (statusDataSaved) {
            setLogin(true);
          } else {
            setPushUpError("Not saved data, try once");
          }
        })
        .catch((error) => {
          setPushUpError(error.message);
        });
    } else {
      login(user)
        .then((statusLogin) => {
          setPushUp(null);
          setPasswordStatus(statusLogin);
          if (statusLogin) setLogin(true);
        })
        .catch((error) => {
          setPushUpError(error.message);
        });
    }
  }

  useEffect(() => {
    if (nameDraft === "") {
      setChangeName(false);
      setNameStatus(true);
      return;
    }
    setChangeName(true);
    isNameFree(nameDraft)
      .then((status) => {
        setNameStatus(status);
      })
      .catch((error) => {
        setPushUpError(error.message);
      });
  }, [nameDraft, setPushUpError]);

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
      </form>
    </div>
  );
}
