import React, { useEffect, useRef } from "react";

export default function ThemeColorSample({ color, onThemeColor, children }) {
  const ref = useRef();

  const start = `
  delay-1000
  transition-all 
  duration-1000
  absolute 
  `;
  const fin = `
    delay-1000
    transition-all 
    duration-1000 
    flex-1 
    h-6 w-6 
    cursor-pointer 
    bg-${color}-500
    `;

  function animation() {
    ref.current.className = fin;
  }

  useEffect(() => {
    animation();
  });

  return (
    <div
      ref={ref}
      onClick={() => onThemeColor(color)}
      title={`set ${color} theme`}
      className={start}
    >
      {children}
    </div>
  );
}
