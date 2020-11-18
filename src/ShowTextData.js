import React from "react";
export default function ShowTextData({ children, typeText = "" }) {
  return (
    <p className="px-2 break-words text-black">
      <span className="text-gray-700">{typeText}</span> {children}
    </p>
  );
}
