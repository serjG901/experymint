import React from "react";

export default function SendAndShowTextDataFormInput({ typeTextData }) {
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
      id={typeTextData}
      type="text"
      placeholder={`input your ${typeTextData}`}
      maxLength="128"
    />
  );
}
