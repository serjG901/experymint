import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useUser } from "../core/UserProvider";

export default function FilterStatus() {
  const themeColor = useTheme();
  const user = useUser();

  return (
    <p className={`${themeColor.colorTextData} px-2 break-words`}>
      <span className={themeColor.colorTextExplane}>filtred by</span>{" "}
      {user.filter || "all"}
    </p>
  );
}
