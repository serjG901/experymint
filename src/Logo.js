import React from "react";
import LogoImage from "./LogoImage.js";
import LogoText from "./LogoText.js";

export default function Logo({ children, image }) {
  return (
    <div className="flex flex-col items-center">
      <LogoImage>{image}</LogoImage>
      <LogoText>{children}</LogoText>
    </div>
  );
}
