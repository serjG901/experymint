import React from "react";

export default function TestIcon({ isActive }) {
  return (
    <svg className="inline-block transform scale-150" width="24" height="24">
      <circle cx="12" cy="6" r="6" fill="rgba(255,255,0,0.5)" />
      <circle cx="6" cy="12" r="6" fill="rgba(0,255,0,0.5)" />
      <circle cx="12" cy="18" r="6" fill="rgba(255,0,0,0.5)" />
      <circle cx="18" cy="12" r="6" fill="rgba(0,0,255,0.5)" />
      <circle cx="6" cy="12" r="6" fill="rgba(0,255,0,0.5)" />
      <circle cx="12" cy="6" r="6" fill="rgba(255,255,0,0.5)" />
      <circle cx="18" cy="12" r="6" fill="rgba(0,0,255,0.5)" />
      <circle cx="12" cy="18" r="6" fill="rgba(255,0,0,0.5)" />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="white"
        strokeWidth="4"
        fill="rgba(255,255,255,0)"
      />
    </svg>
  );
}
