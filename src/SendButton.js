import React, { useContext, useEffect, useRef } from "react";
import ThemeColorContext from "./ThemeColorContext.js";

export default function SendButton({ children }) {
  const themeColor = useContext(ThemeColorContext);
  const ref = useRef();
  const style = `
    transition-all 
    duration-1000
    mb-4 mx-4 py-2 px-4 
    rounded 
    cursor-pointer
    focus:outline-none 
    focus:shadow-outline
    `;
  const start = `shadow-none bg-transparent`;
  const fin = `shadow-md bg-${themeColor}-500 hover:bg-${themeColor}-700`;

  function animation() {
    ref.current.className = style + fin;
  }

  useEffect(() => {
    animation();
  });

  return (
    <button ref={ref} className={style + start} type="submit">
      {children}
    </button>
  );
}
