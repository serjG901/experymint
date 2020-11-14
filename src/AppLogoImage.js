import React, { useEffect, useRef } from "react";

export default function AppLogoImage({ children }) {
  const ref = useRef();
  const style = `
  transition-all 
  duration-1000 
  sm:self-start 
  self-center
  `;
  const start = `w-0`;
  const fin = `w-1/4`;

  function animation() {
    ref.current.className = style + fin;
  }

  useEffect(() => {
    animation();
  });

  return <img ref={ref} className={style + start} src={children} alt="logo" />;
}
