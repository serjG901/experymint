import React from "react";

const style = (color) => {
  return `flex-1 h-6 w-6 cursor-pointer bg-${color}-500`;
};

export default function ThemeColorSample({
  color,
  onThemeColor,
  currentThemeColor
}) {
  return (
    <div
      onClick={() => onThemeColor(color)}
      title={`set ${color} theme`}
      className={style(color)}
    >
      {currentThemeColor === color && <>&#10003;</>}
    </div>
  );
}
