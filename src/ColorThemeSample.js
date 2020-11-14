import React from "react";

const colorThemeSample = (color) => {
  return `
    flex-1
    h-6 
    w-6
    cursor-pointer
    bg-${color}-500
    `;
};

export default function ColorThemeSample({
  color,
  onCurrentColorTheme,
  currentColorTheme
}) {
  return (
    <div
      onClick={() => {
        onCurrentColorTheme(color);
      }}
      title={`set ${color} theme`}
      className={colorThemeSample(color)}
    >
      {currentColorTheme === color ? <span>&#10003;</span> : ""}
    </div>
  );
}
