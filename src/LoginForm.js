import React, { useState } from "react";
import { isNameFree, setUserData, IsPassCorrect } from "./UsersData.js";

function LoginForm({ CS, onID }) {
  const [myError, setMyError] = useState(false);

  const [statusIsNameFree, setStatusIsNameFree] = useState(() => {
    return "new";
  });
  const [statusIsPassCorrect, setStatusIsPassCorrect] = useState(() => {
    return "new";
  });

  function handleName(status) {
    setStatusIsNameFree(status);
  }

  function handlePass(status) {
    setStatusIsPassCorrect(status);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = {
      name: event.target.elements.inputName.value,
      pass: event.target.elements.inputPass.value
    };
    if (statusIsNameFree) {
      const statusDataSaved = setUserData(user);
      if (statusDataSaved) {
        onID(user.name);
        return;
      }
      setMyError("Not saved data, try once");
      return;
    }
    handlePass(IsPassCorrect(user));
    if (IsPassCorrect(user)) onID(user.name);
  }

  function handleChangeName(event) {
    if (event.target.value === "") {
      handleName("new");
      return;
    }
    handleName(isNameFree(event.target.value));
  }

  function handleChangePass(event) {
    handlePass("new");
  }

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            id="inputName"
            type="text"
            placeholder={"unique name"}
            required
            maxLength="28"
            onChange={handleChangeName}
            className={CS.inputText}
          />
          <p>
            {statusIsNameFree === "new"
              ? ""
              : statusIsNameFree
              ? "Good new name"
              : "This name is occupied"}
          </p>
        </div>
        <div className="mb-4">
          <input
            id="inputPass"
            type="password"
            maxLength="28"
            placeholder={"password"}
            required
            onChange={handleChangePass}
            className={CS.inputText}
          />
          <p>
            {statusIsPassCorrect === "new" || statusIsPassCorrect
              ? ""
              : "Password is wrong"}
          </p>
        </div>
        <div>
          <button className={CS.buttonSend} type="submit">
            In game
          </button>
        </div>
        <p>{myError ? myError : ""}</p>
      </form>
    </div>
  );
}

export default LoginForm;
