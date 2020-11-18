import React, { useContext } from "react";
import ThemeColorContext from "./ThemeColorContext.js";
import ThemeColorSample from "./ThemeColorSample.js";

const themeColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "indigo",
  "purple",
  "pink",
  "gray"
];

export default function ThemeColorSetter({ onThemeColor }) {
  const themeColor = useContext(ThemeColorContext);

  return (
    <div className="flex flex-col justify-center m-4">
      <div>Set color theme</div>
      <div className="flex justify-center h-6">
        {themeColors.map((color) => (
          <ThemeColorSample
            key={color}
            onThemeColor={onThemeColor}
            color={color}
          >
            {themeColor.color === color && <>&#10003;</>}
          </ThemeColorSample>
        ))}
      </div>
    </div>
  );
}
