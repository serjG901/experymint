import React from "react";

export default function SendAndShowTextDataFormLabel({
  children,
  typeTextData,
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
      htmlFor={typeTextData}
      title={statusInput ? "" : `click to change your ${typeTextData}`}
    >
      {children}
    </label>
  );
}
