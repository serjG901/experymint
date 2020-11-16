import React from "react";

export default function MyError({ children }) {
  return (
    <div className="absolute w-1/2 shadow-md bg-white text-red-600 rounded">{children}</div>
  );
}
