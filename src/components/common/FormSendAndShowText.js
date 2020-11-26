import React, { useState } from "react";
import TextInput from "./TextInput";
import SendButton from "./SendButton";
import { useTheme } from "../core/ThemeProvider";
import { useUser, useUserSet } from "../core/UserProvider";

export default function FormSendAndShowText({ nameProperty }) {
  const user = useUser();
  const userSet = useUserSet();
  const themeColor = useTheme();

  const [statusInput, setStatusInput] = useState(false);
  const [draftInput, setDraftInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const dataSource = draftInput.trim();
    userSet({ ...user, [nameProperty]: dataSource });
    setDraftInput("");
    setStatusInput(false);
  }

  function handleChange(event) {
    setDraftInput(event.target.value);
  }

  return (
    <form className="p-2 mb-2" onSubmit={handleSubmit}>
      <label
        htmlFor={nameProperty}
        title={statusInput ? "" : `Click to change your ${nameProperty}`}
        className="block text-sm cursor-pointer"
        onClick={() => setStatusInput(!statusInput)}
      >
        <span className={`${themeColor.colorTextLabel} font-bold`}>
          {nameProperty}
        </span>
        <p
          className={
            statusInput
              ? `${themeColor.colorTextData} break-words`
              : `${themeColor.colorTextData} break-words text-2xl font-bold`
          }
        >
          {user[nameProperty]}
        </p>
      </label>
      {statusInput ? (
        <>
          <TextInput
            nameProperty={nameProperty}
            onChange={handleChange}
            value={draftInput}
          />
          <SendButton>Send</SendButton>
        </>
      ) : null}
    </form>
  );
}
