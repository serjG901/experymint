import React, { useEffect } from "react";
import { useTheme } from "../core/ThemeProvider";
import {
  usePropertyUser,
  useNamePropertyUserSet
} from "../core/PropertyUserProvider";

export default function SimpleIndex({ nameProperty }) {
  const themeColor = useTheme();
  const namePropertyUserSet = useNamePropertyUserSet();
  const index = usePropertyUser();

  useEffect(() => {
    namePropertyUserSet(nameProperty);
  });

  return (
    <div className="text-xl">
      <span className={`${themeColor.colorTextExplane}`}>{nameProperty}:</span>
      <span className={`${themeColor.colorTextData} font-bold`}>
        {index || 0}
      </span>
    </div>
  );
}
