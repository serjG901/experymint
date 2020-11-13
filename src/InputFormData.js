import React, { useEffect, useState, useContext } from "react";
import { getUserData, updateUserData } from "./UsersData.js";
import ThemeColorContext from "./ThemeColorContext.js";

function TextDataOpenInput({ userData, typeData }) {
  return (
    <>
      {typeData}: <p className="break-word text-black">{userData[typeData]}</p>
    </>
  );
}

function TextDataCloseInput({ userData, typeData }) {
  const themeColor = useContext(ThemeColorContext);
  return (
    <>
      {typeData}:{" "}
      <p
        className={`
          break-word 
          text-black
          rounded
          text-2xl 
          font-bold 
          hover:bg-${themeColor}-100 
          cursor-pointer
          `}
      >
        {userData[typeData]}
      </p>
    </>
  );
}

function Form({ children, handleSubmit }) {
  return (
    <form
      className={` 
      px-2 
      pt-2 
      pb-2 
      mb-2
      `}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}

function LabelOpenInput({ children, typeData, statusInput, setStatusInput }) {
  return (
    <label
      onClick={() => {
        setStatusInput(!statusInput);
      }}
      className={`
        block 
        text-sm 
        mb-2
        cursor-pointer
        `}
      htmlFor={typeData}
    >
      {children}
    </label>
  );
}

function LabelCloseInput({ children, typeData, handleClick }) {
  return (
    <label
      className={`
        block 
        text-sm 
        mb-2
        cursor-pointer
        `}
      onClick={handleClick}
      title={`click to change your ${typeData}`}
    >
      {children}
    </label>
  );
}

function Input({ typeData }) {
  return (
    <input
      className={`
        w-full
        text-center
        shadow 
        appearance-none 
        rounded  
        py-2 
        px-2 
        mb-4
        text-gray-700  
        focus:outline-none 
        focus:shadow-outline
        `}
      id={typeData}
      type="text"
      placeholder={`input your ${typeData}`}
      maxLength="128"
    />
  );
}

function Send({ children }) {
  const themeColor = useContext(ThemeColorContext);
  return (
    <button
      className={`
        shadow-md
        bg-${themeColor}-500 
        hover:bg-${themeColor}-700 
        mb-4
        mx-4 
        py-2 
        px-4 
        rounded 
        cursor-pointer
        focus:outline-none 
        focus:shadow-outline
        `}
      type="submit"
    >
      {children}
    </button>
  );
}

function FormTextDataClose({ handleSubmit, handleClick, typeData, userData }) {
  return (
    <Form handleSubmit={handleSubmit}>
      <LabelCloseInput typeData={typeData} handleClick={handleClick}>
        <TextDataCloseInput userData={userData} typeData={typeData} />
      </LabelCloseInput>
    </Form>
  );
}

function FormTextDataOpen({
  statusInput,
  handleSubmit,
  setStatusInput,
  typeData,
  userData
}) {
  return (
    <Form handleSubmit={handleSubmit}>
      <LabelOpenInput
        typeData={typeData}
        statusInput={statusInput}
        setStatusInput={setStatusInput}
      >
        <TextDataOpenInput userData={userData} typeData={typeData} />
      </LabelOpenInput>
      <Input typeData={typeData} />
      <Send>Send</Send>
    </Form>
  );
}

function InputFormData({ userID, typeData, onChangeData }) {
  const [statusInput, setStatusInput] = useState(true);
  const [userData, setUserData] = useState(() => {
    return {};
  });

  useEffect(() => {
    setUserData(getUserData(userID));
  }, [userID]);

  useEffect(() => {
    if (userData[typeData] !== "") setStatusInput(false);
  }, [userData, typeData]);

  function handleSubmit(event) {
    event.preventDefault();
    const dataSource = event.target.elements[typeData].value.trim();

    const statusUpdate = updateUserData(userID, typeData, dataSource);
    if (statusUpdate) {
      setUserData(getUserData(userID));
      onChangeData();
      event.target.elements[typeData].value = "";
      setStatusInput(true);
    }

    setStatusInput(false);
    return;
  }

  function handleClick() {
    setStatusInput(true);
  }

  return userData ? (
    statusInput ? (
      <FormTextDataOpen
        statusInput={statusInput}
        handleSubmit={handleSubmit}
        setStatusInput={setStatusInput}
        typeData={typeData}
        userData={userData}
      ></FormTextDataOpen>
    ) : (
      <FormTextDataClose
        handleSubmit={handleSubmit}
        handleClick={handleClick}
        typeData={typeData}
        userData={userData}
      ></FormTextDataClose>
    )
  ) : (
    <div></div>
  );
}

export default InputFormData;
