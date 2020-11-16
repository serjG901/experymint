import React from "react";

export default function MyError({ children }) {
  return (
    <div className="absolute w-1/2 bg-white text-black rounded">{children}</div>
  );
}
