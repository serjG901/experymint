import React from "react";
export default function SaSTextFormText({
  children,
  typeText = "",
  statusInput = true
}) {
  const style = "break-words text-black";
  return (
    <>
      <span className="font-bold">{typeText}</span>
      <p className={statusInput ? style : `${style} text-2xl font-bold`}>
        {children}
      </p>
    </>
  );
}
