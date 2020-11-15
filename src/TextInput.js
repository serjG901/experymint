import React, { useEffect, useRef } from "react";

export default function TextInput({
  typeText,
  onChange = () => {},
  req = false,
  ml = "128"
}) {
  const ref = useRef();

  const startStyle = `opacity-0`;
  const finStyle = `
    opacity-100
    w-full
    transition-all 
    duration-1000
    mb-4 py-2 px-2 
    text-center
    text-gray-700
    shadow 
    appearance-none 
    rounded  
    focus:outline-none 
    focus:shadow-outline`;

  function animation() {
    ref.current.className = finStyle;
  }

  useEffect(() => {
    animation();
  });

  return (
    <input
      ref={ref}
      id={typeText}
      type={typeText === "pass" ? "password" : "text"}
      placeholder={`input your ${typeText}`}
      required={req}
      maxLength={ml}
      onChange={onChange}
      className={startStyle}
    />
  );
}
