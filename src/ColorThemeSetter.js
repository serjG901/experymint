import React, { useEffect, useState } from "react";
import ColorThemeSample from "./ColorThemeSample.js";

const colorsTheme = [
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

function ColorThemeSetter({ CS, setColorThemeApp }) {
  const [currentColorTheme, setCurrentColorTheme] = useState(CS.getTheme());

  useEffect(() => {
    setColorThemeApp(currentColorTheme);
  }, [currentColorTheme, setColorThemeApp]);

  function handleCurrentColorTheme(color) {
    colorsTheme.forEach((item) => {
      setTimeout(setCurrentColorTheme(color), 1000);
    });
    setCurrentColorTheme(color);
  }

  return (
    <div className="flex flex-col justify-center m-4">
      <div>Set color theme</div>
      <div className="flex justify-center">
        {colorsTheme.map((color) => {
          return (
            <ColorThemeSample
              key={color}
              currentColorTheme={currentColorTheme}
              onCurrentColorTheme={handleCurrentColorTheme}
              color={color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ColorThemeSetter;
