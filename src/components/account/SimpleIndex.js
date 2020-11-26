import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useUser } from "../core/UserProvider";

export default function SimpleIndex({ nameProperty }) {
  const themeColor = useTheme();
  const user = useUser();
  return (
    <div className="text-xl">
      <span className={`${themeColor.colorTextExplane}`}>{nameProperty}:</span>
      <span className={`${themeColor.colorTextData} font-bold`}>
        {user[nameProperty] || 0}
      </span>
    </div>
  );
}
