import React from "react";

export default function SaSTextFormLabel({
  children,
  typeText,
  statusInput,
  setStatusInput
}) {
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
      htmlFor={typeText}
      title={statusInput ? "" : `click to change your ${typeText}`}
    >
      {children}
    </label>
  );
}
