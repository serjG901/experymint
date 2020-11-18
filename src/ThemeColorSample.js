import React, { useEffect, useRef } from "react";

export default function ThemeColorSample({ color, onThemeColor, children }) {
  const ref = useRef();

  const bgStyle = {
    red: "bg-red-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
    teal: "bg-teal-500",
    blue: "bg-blue-500",
    indigo: "bg-indigo-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    gray: "bg-gray-500"
  };
  const style = `
    delay-1000
    transition-all 
    duration-1000
    h-6 w-6 cursor-pointer
    `;
  const start = `absolute`;
  const fin = `flex-1 ${bgStyle[color]}`;

  function animation() {
    ref.current.className = style + fin;
  }

  useEffect(() => {
    const timeId = setTimeout(() => animation(), 1000);
    return () => clearTimeout(timeId);
  });

  return (
    <div
      ref={ref}
      title={`Set ${color} theme`}
      className={style + start}
      onClick={() => onThemeColor(color)}
    >
      {children}
    </div>
  );
}
