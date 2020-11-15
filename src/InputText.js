import React from "react";

const inputStyle = `
w-full
text-center
shadow 
appearance-none 
rounded  
mb-4
py-2 
px-2 
text-gray-700  
focus:outline-none 
focus:shadow-outline`;

export default function InputText({
  typeText,
  onChange = () => {},
  req = false,
  ml = "128"
}) {
  return (
    <input
      id={typeText}
      type={typeText === "pass" ? "password" : "text"}
      placeholder={`input your ${typeText}`}
      required={req}
      maxLength={ml}
      onChange={onChange}
      className={inputStyle}
    />
  );
}
