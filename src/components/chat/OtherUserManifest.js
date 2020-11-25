import React from "react";
import { useTheme } from "../core/ThemeProvider";

export default function OtherUserManifest({ children }) {
  const themeColor = useTheme();
  return (
    <div className="w-1/2">
      {children ? (
        <p className="font-bold break-words">{children}</p>
      ) : (
        <span className={`${themeColor.colorTextExplane}`}>manifest</span>
      )}
    </div>
  );
}
