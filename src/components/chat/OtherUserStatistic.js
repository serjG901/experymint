import React from "react";
import { useTheme } from "../core/ThemeProvider";

export default function OtherUserStatistic({ indexOfClosest, mistruth }) {
  const themeColor = useTheme();
  return (
    <div className="flex">
      <div className="w-1/3">
        <span className={`${themeColor.colorTextExplane}`}>closeness:</span>
        {indexOfClosest.index}
      </div>
      <div className="w-1/3">
        <span className={`${themeColor.colorTextExplane}`}>
          compared pictures:
        </span>
        {indexOfClosest.amount}
      </div>
      <div className="w-1/3">
        <span className={`${themeColor.colorTextExplane}`}>mistruth:</span>
        {mistruth}
      </div>
    </div>
  );
}
