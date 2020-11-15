import React, { useState } from "react";
import { IsNameFree, setUserData, IsPassCorrect } from "./UsersData.js";
import FormSubmit from "./FormSubmit.js";
import InputText from "./InputText.js";

export default function Login({ onID }) {
  const [myError, setMyError] = useState(false);
  const [isNameFree, setIsNameFree] = useState("new");
  const [isPassCorrect, setIsPassCorrect] = useState("new");

  function handleSubmit(event) {
    event.preventDefault();
    const user = {
      name: event.target.elements.name.value,
      pass: event.target.elements.pass.value
    };
    if (isNameFree) {
      const statusDataSaved = setUserData(user);
      if (statusDataSaved) {
        onID(user.name);
        return;
      }
      setMyError("Not saved data, try once");
      return;
    }
    const statusLogin = IsPassCorrect(user);
    setIsPassCorrect(statusLogin);
    if (statusLogin) onID(user.name);
  }

  function handleChangeName(event) {
    if (event.target.value === "") {
      setIsNameFree("new");
      return;
    }
    setIsNameFree(IsNameFree(event.target.value));
  }

  function handleChangePass() {
    setIsPassCorrect("new");
  }

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          {isNameFree === "new"
            ? "Unique name"
            : isNameFree
            ? "Good new name"
            : "This name is occupied"}
        </label>
        <InputText
          typeText="name"
          onChange={handleChangeName}
          req={true}
          ml={"28"}
        />
        <label htmlFor="pass">
          {isPassCorrect === "new" || isPassCorrect
            ? "Password"
            : "Password is wrong"}
        </label>
        <InputText
          typeText="pass"
          onChange={handleChangePass}
          req={true}
          ml={"28"}
        />
        <FormSubmit>In game</FormSubmit>
        <p>{myError ? myError : ""}</p>
      </form>
    </div>
  );
}
