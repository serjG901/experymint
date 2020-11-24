import React, { useEffect, useState } from "react";

export default function TextInput({
  typeText,
  onChange = () => {},
  required = false,
  maxLength = "128",
  value
}) {
  const [style, setStyle] = useState(`opacity-0`);

  function animation() {
    setStyle(
      `
      opacity-100
      w-full shadow
      transition-all 
      duration-1000
      mb-4 py-2 px-2 
      text-center
      text-gray-700
      rounded 
      appearance-none 
      focus:outline-none 
      focus:shadow-outline
      `
    );
  }

  useEffect(() => animation());

  return (
    <input
      id={typeText}
      type={typeText === "password" ? "password" : "text"}
      placeholder={`Input your ${typeText}`}
      required={required}
      maxLength={maxLength}
      className={style}
      onChange={onChange}
      value={value}
    />
  );
}
