import React from "react";

export default function MyError({ children, w = "1/2" }) {
  return (
    <div className={`absolute ${w} shadow-md bg-white text-red-600 rounded`}>
      {children}
    </div>
  );
}
