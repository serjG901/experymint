import React from "react";

export const themeColorStyle = {
  red: {
    color: "red",
    text300: "text-red-300",
    bg200: "bg-red-200",
    bg300: "bg-red-300",
    bg400: "bg-red-400",
    hbg400: "hover:bg-red-400",
    bg500: "bg-red-500",
    bg700: "bg-red-700",
    hbg700: "hover:bg-red-700",
    lbg: "bg-gradient-to-b from-red-500 via-red-600 to-red-300"
  },
  orange: {
    color: "orange",
    text300: "text-orange-300",
    bg200: "bg-orange-200",
    bg300: "bg-orange-300",
    bg400: "bg-orange-400",
    hbg400: "hover:bg-orange-400",
    bg500: "bg-orange-500",
    bg700: "bg-orange-700",
    hbg700: "hover:bg-orange-700",
    lbg: "bg-gradient-to-b from-orange-500 via-orange-600 to-orange-300"
  },
  yellow: {
    color: "yellow",
    text300: "text-yellow-300",
    bg200: "bg-yellow-200",
    bg300: "bg-yellow-300",
    bg400: "bg-yellow-400",
    hbg400: "hover:bg-yellow-400",
    bg500: "bg-yellow-500",
    bg700: "bg-yellow-700",
    hbg700: "hover:bg-yellow-700",
    lbg: "bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-300"
  },
  green: {
    color: "green",
    text300: "text-green-300",
    bg200: "bg-green-200",
    bg300: "bg-green-300",
    bg400: "bg-green-400",
    hbg400: "hover:bg-green-400",
    bg500: "bg-green-500",
    bg700: "bg-green-700",
    hbg700: "hover:bg-green-700",
    lbg: "bg-gradient-to-b from-green-500 via-green-600 to-green-300"
  },
  teal: {
    color: "teal",
    text300: "text-teal-300",
    bg200: "bg-teal-200",
    bg300: "bg-teal-300",
    bg400: "bg-teal-400",
    hbg400: "hover:bg-teal-400",
    bg500: "bg-teal-500",
    bg700: "bg-teal-700",
    hbg700: "hover:bg-teal-700",
    lbg: "bg-gradient-to-b from-teal-500 via-teal-600 to-teal-300"
  },
  blue: {
    color: "blue",
    text300: "text-blue-300",
    bg200: "bg-blue-200",
    bg300: "bg-blue-300",
    bg400: "bg-blue-400",
    hbg400: "hover:bg-blue-400",
    bg500: "bg-blue-500",
    bg700: "bg-blue-700",
    hbg700: "hover:bg-blue-700",
    lbg: "bg-gradient-to-b from-blue-500 via-blue-600 to-blue-300"
  },
  indigo: {
    color: "indigo",
    text300: "text-indigo-300",
    bg200: "bg-indigo-200",
    bg300: "bg-indigo-300",
    bg400: "bg-indigo-400",
    hbg400: "hover:bg-indigo-400",
    bg500: "bg-indigo-500",
    bg700: "bg-indigo-700",
    hbg700: "hover:bg-indigo-700",
    lbg: "bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-300"
  },
  purple: {
    color: "purple",
    text300: "text-purple-300",
    bg200: "bg-purple-200",
    bg300: "bg-purple-300",
    bg400: "bg-purple-400",
    hbg400: "hover:bg-purple-400",
    bg500: "bg-purple-500",
    bg700: "bg-purple-700",
    hbg700: "hover:bg-purple-700",
    lbg: "bg-gradient-to-b from-purple-500 via-purple-600 to-purple-300"
  },
  pink: {
    color: "pink",
    text300: "text-pink-300",
    bg200: "bg-pink-200",
    bg300: "bg-pink-300",
    bg400: "bg-pink-400",
    hbg400: "hover:bg-pink-400",
    bg500: "bg-pink-500",
    bg700: "bg-pink-700",
    hbg700: "hover:bg-pink-700",
    lbg: "bg-gradient-to-b from-pink-500 via-pink-600 to-pink-300"
  },
  gray: {
    color: "gray",
    text300: "text-gray-300",
    bg200: "bg-gray-200",
    bg300: "bg-gray-300",
    bg400: "bg-gray-400",
    hbg400: "hover:bg-gray-400",
    bg500: "bg-gray-500",
    bg700: "bg-gray-700",
    hbg700: "hover:bg-gray-700",
    lbg: "bg-gradient-to-b from-gray-500 via-gray-600 to-gray-300"
  }
};

const ThemeColorContext = React.createContext(themeColorStyle["gray"]);
export default ThemeColorContext;
