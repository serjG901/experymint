import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useUniqueIndex } from "../core/UniqueIndexProvider";

export default function UniqueIndex() {
  const uniqueIndex = useUniqueIndex();
  const themeColor = useTheme();
  return (
    <div className="text-xl">
      <span className={themeColor.colorTextExplane}>unique:</span>
      <span className={`${themeColor.colorTextData} font-bold`}>
        {uniqueIndex || 0}
      </span>
    </div>
  );
}
