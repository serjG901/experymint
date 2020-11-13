import React from "react";

const colorsTheme = {
  red: "red",
  orange: "orange",
  yellow: "yellow",
  green: "green",
  teal: "teal",
  blue: "blue",
  indigo: "indigo",
  purple: "purple",
  pink: "pink",
  gray: "gray"
};

const ThemeColorContext = React.createContext("teal");

export default ThemeColorContext;
