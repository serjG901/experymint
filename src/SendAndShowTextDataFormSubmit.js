import React, { useContext } from "react";
import ThemeColorContext from "./ThemeColorContext.js";

export default function SendAndShowTextDataFormSubmit({ children }) {
  const themeColor = useContext(ThemeColorContext);
  return (
    <button
      className={`
        shadow-md
        bg-${themeColor}-500 
        hover:bg-${themeColor}-700 
        mb-4
        mx-4 
        py-2 
        px-4 
        rounded 
        cursor-pointer
        focus:outline-none 
        focus:shadow-outline
        `}
      type="submit"
    >
      {children}
    </button>
  );
}
