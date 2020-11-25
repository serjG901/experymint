import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { usePropertyUser } from "../core/PropertyUserProvider";

export default function FilterStatus() {
  const themeColor = useTheme();
  const filter = usePropertyUser();

  return (
    <p className={`${themeColor.colorTextData} px-2 break-words`}>
      <span className={`${themeColor.colorTextExplane}`}>filtred by</span>{" "}
      {filter || "all"}
    </p>
  );
}
