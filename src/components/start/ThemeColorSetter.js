import React from "react";
import { useTheme, themeColorStyle } from "../core/ThemeProvider";
import ThemeColorSample from "./ThemeColorSample";

const themeColors = Object.keys(themeColorStyle);

export default function ThemeColorSetter() {
  const themeColor = useTheme();

  return (
    <div className="flex flex-col justify-center m-4">
      <div className={`${themeColor.colorTextExplane}`}>Set color theme</div>
      <div className="flex justify-center h-6">
        {themeColors.map((color) => (
          <ThemeColorSample key={color} color={color}>
            {themeColor.color === color && <>&#10003;</>}
          </ThemeColorSample>
        ))}
      </div>
    </div>
  );
}
