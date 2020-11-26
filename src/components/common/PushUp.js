import React from "react";
import { useTheme } from "../core/ThemeProvider";

export default function PushUp({ message }) {
  const themeColor = useTheme();
  const style = `
    absolute w-1/2
    p-4 m-4
    bottom-0 left-0 
    shadow-md rounded
    ${themeColor.bgTextBlock} 
    ${themeColor.colorTextExplane}
    `;

  return <div className={message ? style : "hidden"}>{message}</div>;
}
