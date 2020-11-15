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
      <div className="flex justify-center">
        {themeColors.map((color) => (
          <ThemeColorSample
            key={color}
            currentThemeColor={themeColor}
            onThemeColor={onThemeColor}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}
