import React from "react";

export default function SaSTextFormLabel({
  children,
  typeText,
  statusInput,
  setStatusInput
}) {
  return (
    <label
      htmlFor={typeText}
      title={statusInput ? "" : `Click to change your ${typeText}`}
      className="block text-sm cursor-pointer"
      onClick={() => setStatusInput(!statusInput)}
    >
      {children}
    </label>
  );
}
