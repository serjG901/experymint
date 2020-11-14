import React, { useContext } from "react";
import ThemeColorContext from "./ThemeColorContext.js";

export default function SendAndShowTextDataFormText({
  userData,
  typeTextData,
  statusInput
}) {
  const themeColor = useContext(ThemeColorContext);
  return (
    <>
      {typeTextData}:{" "}
      <p
        className={
          statusInput
            ? "break-word text-black"
            : `
              break-word 
              text-black
              rounded
              text-2xl 
              font-bold 
              hover:bg-${themeColor}-100 
              cursor-pointer
              `
        }
      >
        {userData[typeTextData]}
      </p>
    </>
  );
}
