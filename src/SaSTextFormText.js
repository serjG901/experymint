import React from "react";
export default function SaSTextFormText({ userData, typeText, statusInput }) {
  const style = "break-words text-black";
  return (
    <>
      {typeText}
      <p className={statusInput ? style : `${style} text-2xl font-bold`}>
        {userData[typeText]}
      </p>
    </>
  );
}
