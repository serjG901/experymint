import React from "react";

export default function ChatIcon() {
  return (
    <svg className="inline-block" height="36" width="36">
      <path
        d="M1 34 L1 6 L6 1 L30 1 L35 6 L35 24 L30 30 L7 30 L1 34 Z"
        fill="white"
        stroke="gray"
        strokeWidth="2"
      />
      <circle cx="6" cy="6" r="5" stroke="gray" strokeWidth="2" fill="white" />
      <circle cx="30" cy="6" r="5" stroke="gray" strokeWidth="2" fill="white" />
      <circle
        cx="30"
        cy="25"
        r="5"
        stroke="gray"
        strokeWidth="2"
        fill="white"
      />
      <path
        d="M2 32 L2 6 L6 2 L30 2 L34 6 L34 25 L30 29 L6 29 L2 32 Z"
        fill="white"
      />
      <text style={{ fontFamily: "sans-serif" }} x="3" y="20" fill="black">
        #@!
      </text>
    </svg>
  );
}
