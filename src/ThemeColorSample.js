import React, { useEffect, useRef } from "react";

export default function ThemeColorSample({ color, onThemeColor, children }) {
  const ref = useRef();

  const style = `
  delay-1000
  transition-all 
  duration-1000
  h-6 w-6
  cursor-pointer
  `;
  const start = `absolute`;
  const fin = `flex-1 bg-${color}-500`;

  function animation() {
    ref.current.className = style + fin;
  }

  useEffect(() => {
    const timeId = setTimeout(() => animation(), 2000);
    return () => clearTimeout(timeId);
  });

  return (
    <div
      ref={ref}
      onClick={() => onThemeColor(color)}
      title={`set ${color} theme`}
      className={style + start}
    >
      {children}
    </div>
  );
}
