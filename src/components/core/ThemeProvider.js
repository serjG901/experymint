import React, { useContext, useEffect, useState } from "react";

const ThemeColorContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeColorContext).theme;
};

export const useThemeSet = () => {
  return useContext(ThemeColorContext).setCurrentTheme;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    window.localStorage.getItem("theme") || "gray"
  );

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <ThemeColorContext.Provider
      value={{ setCurrentTheme, theme: themeColorStyle[currentTheme] }}
    >
      {children}
    </ThemeColorContext.Provider>
  );
};

export const bodyBgColor = {
  red: "#feb2b2",
  orange: "#fbd38d",
  yellow: "#faf089",
  green: "#9ae6b4",
  teal: "#81e6d9",
  blue: "#90cdf4",
  indigo: "#a3bffa",
  purple: "#d6bcfa",
  pink: "#fbb6ce",
  gray: "#e2e8f0",
  dark: "#1a202c",
  light: "#f7fafc",
  bee: "#000000"
};

export const themeColorStyle = {
  red: {
    color: "red",
    sample: "bg-red-500",
    colorTextLogo: "text-red-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-red-200",
    bgLink: "bg-red-300",
    bgOtherUserClose: "bg-red-200",
    bgOtherUserOpen: "bg-red-400",
    hbgOtherUser: "hover:bg-red-500",
    bgIncomingMessage: "bg-red-300",
    bgOutgoingMessage: "bg-red-500",
    bgButton: "bg-red-500",
    hbgButton: "hover:bg-red-700",
    bgApp: "bg-gradient-to-b from-red-500 via-red-600 to-red-300"
  },
  orange: {
    color: "orange",
    sample: "bg-orange-500",
    colorTextLogo: "text-orange-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-orange-200",
    bgLink: "bg-orange-300",
    bgOtherUserClose: "bg-orange-200",
    bgOtherUserOpen: "bg-orange-400",
    hbgOtherUser: "hover:bg-orange-500",
    bgIncomingMessage: "bg-orange-300",
    bgOutgoingMessage: "bg-orange-500",
    bgButton: "bg-orange-500",
    hbgButton: "hover:bg-orange-700",
    bgApp: "bg-gradient-to-b from-orange-500 via-orange-600 to-orange-300"
  },
  yellow: {
    color: "yellow",
    sample: "bg-yellow-500",
    colorTextLogo: "text-yellow-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-yellow-200",
    bgLink: "bg-yellow-300",
    bgOtherUserClose: "bg-yellow-200",
    bgOtherUserOpen: "bg-yellow-400",
    hbgOtherUser: "hover:bg-yellow-500",
    bgIncomingMessage: "bg-yellow-300",
    bgOutgoingMessage: "bg-yellow-500",
    bgButton: "bg-yellow-500",
    hbgButton: "hover:bg-yellow-700",
    bgApp: "bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-300"
  },
  green: {
    color: "green",
    sample: "bg-green-500",
    colorTextLogo: "text-green-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-green-200",
    bgLink: "bg-green-300",
    bgOtherUserClose: "bg-green-200",
    bgOtherUserOpen: "bg-green-400",
    hbgOtherUser: "hover:bg-green-500",
    bgIncomingMessage: "bg-green-300",
    bgOutgoingMessage: "bg-green-500",
    bgButton: "bg-green-500",
    hbgButton: "hover:bg-green-700",
    bgApp: "bg-gradient-to-b from-green-500 via-green-600 to-green-300"
  },
  teal: {
    color: "teal",
    sample: "bg-teal-500",
    colorTextLogo: "text-teal-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-teal-200",
    bgLink: "bg-teal-300",
    bgOtherUserClose: "bg-teal-200",
    bgOtherUserOpen: "bg-teal-400",
    hbgOtherUser: "hover:bg-teal-500",
    bgIncomingMessage: "bg-teal-300",
    bgOutgoingMessage: "bg-teal-500",
    bgButton: "bg-teal-500",
    hbgButton: "hover:bg-teal-700",
    bgApp: "bg-gradient-to-b from-teal-500 via-teal-600 to-teal-300"
  },
  blue: {
    color: "blue",
    sample: "bg-blue-500",
    colorTextLogo: "text-blue-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-blue-200",
    bgLink: "bg-blue-300",
    bgOtherUserClose: "bg-blue-200",
    bgOtherUserOpen: "bg-blue-400",
    hbgOtherUser: "hover:bg-blue-500",
    bgIncomingMessage: "bg-blue-300",
    bgOutgoingMessage: "bg-blue-500",
    bgButton: "bg-blue-500",
    hbgButton: "hover:bg-blue-700",
    bgApp: "bg-gradient-to-b from-blue-500 via-blue-600 to-blue-300"
  },
  indigo: {
    color: "indigo",
    sample: "bg-indigo-500",
    colorTextLogo: "text-indigo-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-indigo-200",
    bgLink: "bg-indigo-300",
    bgOtherUserClose: "bg-indigo-200",
    bgOtherUserOpen: "bg-indigo-400",
    hbgOtherUser: "hover:bg-indigo-500",
    bgIncomingMessage: "bg-indigo-300",
    bgOutgoingMessage: "bg-indigo-500",
    bgButton: "bg-indigo-500",
    hbgButton: "hover:bg-indigo-700",
    bgApp: "bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-300"
  },
  purple: {
    color: "purple",
    sample: "bg-purple-500",
    colorTextLogo: "text-purple-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-purple-200",
    bgLink: "bg-purple-300",
    bgOtherUserClose: "bg-purple-200",
    bgOtherUserOpen: "bg-purple-400",
    hbgOtherUser: "hover:bg-purple-500",
    bgIncomingMessage: "bg-purple-300",
    bgOutgoingMessage: "bg-purple-500",
    bgButton: "bg-purple-500",
    hbgButton: "hover:bg-purple-700",
    bgApp: "bg-gradient-to-b from-purple-500 via-purple-600 to-purple-300"
  },
  pink: {
    color: "pink",
    sample: "bg-pink-500",
    colorTextLogo: "text-pink-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-pink-200",
    bgLink: "bg-pink-300",
    bgOtherUserClose: "bg-pink-200",
    bgOtherUserOpen: "bg-pink-400",
    hbgOtherUser: "hover:bg-pink-500",
    bgIncomingMessage: "bg-pink-300",
    bgOutgoingMessage: "bg-pink-500",
    bgButton: "bg-pink-500",
    hbgButton: "hover:bg-pink-700",
    bgApp: "bg-gradient-to-b from-pink-500 via-pink-600 to-pink-300"
  },
  gray: {
    color: "gray",
    sample: "bg-gray-500",
    colorTextLogo: "text-gray-300",
    colorTextData: "text-black",
    colorTextLabel: "text-white",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-700",
    bgTextBlock: "bg-gray-200",
    bgLink: "bg-gray-300",
    bgOtherUserClose: "bg-gray-200",
    bgOtherUserOpen: "bg-gray-400",
    hbgOtherUser: "hover:bg-gray-500",
    bgIncomingMessage: "bg-gray-300",
    bgOutgoingMessage: "bg-gray-500",
    bgButton: "bg-gray-500",
    hbgButton: "hover:bg-gray-700",
    bgApp: "bg-gradient-to-b from-gray-500 via-gray-600 to-gray-300"
  },
  dark: {
    color: "dark",
    sample: "bg-gray-900",
    colorTextLogo: "text-gray-900",
    colorTextData: "text-white",
    colorTextLabel: "text-gray-300",
    colorTextMain: "text-white",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-500",
    bgTextBlock: "bg-gray-700",
    bgLink: "bg-gray-800",
    bgOtherUserClose: "bg-gray-600",
    bgOtherUserOpen: "bg-gray-700",
    hbgOtherUser: "hover:bg-gray-800",
    bgIncomingMessage: "bg-gray-500",
    bgOutgoingMessage: "bg-gray-800",
    bgButton: "bg-gray-800",
    hbgButton: "hover:bg-gray-700",
    bgApp: "bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900"
  },
  light: {
    color: "light",
    sample: "bg-gray-100",
    colorTextLogo: "text-gray-100",
    colorTextData: "text-black",
    colorTextLabel: "text-gray-600",
    colorTextMain: "text-black",
    colorTextOtherUser: "text-white",
    colorTextExplane: "text-gray-600",
    bgTextBlock: "bg-gray-200",
    bgLink: "bg-gray-300",
    bgOtherUserClose: "bg-gray-300",
    bgOtherUserOpen: "bg-gray-400",
    hbgOtherUser: "hover:bg-gray-500",
    bgIncomingMessage: "bg-gray-500",
    bgOutgoingMessage: "bg-gray-100",
    bgButton: "bg-gray-100",
    hbgButton: "hover:bg-gray-400",
    bgApp: "bg-gradient-to-b from-gray-100 via-gray-300 to-gray-100"
  },
  bee: {
    color: "bee",
    sample: "bg-gradient-to-b from-black via-yellow-400 to-black",
    colorTextLogo: "text-yellow-400",
    colorTextData: "text-yellow-400",
    colorTextLabel: "text-white",
    colorTextMain: "text-gray-700",
    colorTextOtherUser: "text-black",
    colorTextExplane: "text-gray-500",
    bgTextBlock: "bg-yellow-300",
    bgLink: "bg-yellow-400",
    bgOtherUserClose: "bg-yellow-400",
    bgOtherUserOpen: "bg-yellow-500",
    hbgOtherUser: "hover:bg-yellow-600",
    bgIncomingMessage: "bg-yellow-300",
    bgOutgoingMessage: "bg-yellow-400",
    bgButton: "bg-yellow-400",
    hbgButton: "hover:bg-yellow-600",
    bgApp: "bg-black"
  }
};
