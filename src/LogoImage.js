import React, { useEffect, useRef } from "react";

export default function LogoImage({ children }) {
  const ref = useRef();
  const style = `
    transition-all 
    duration-1000
    delay-1000
    w-1/4 
    sm:self-start 
    self-center
    `;
  const start = `opacity-0`;
  const fin = `opacity-100`;

  function animation() {
    ref.current.className = style + fin;
  }

  useEffect(() => {
    animation();
  });

  return <img ref={ref} className={style + start} src={children} alt="logo" />;
}
