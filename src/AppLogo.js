import React from "react";
import AppLogoImage from "./AppLogoImage.js";
import AppLogoText from "./AppLogoText.js";

export default function AppLogo({ children, image }) {
  return (
    <div className="flex flex-col items-center">
      <AppLogoImage>{image}</AppLogoImage>
      <AppLogoText>{children}</AppLogoText>
    </div>
  );
}
