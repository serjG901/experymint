import React, { useEffect, useRef } from "react";

export default function AppLogo({ CS }) {
  const logoRef = useRef();

  function setGrowLogoImage() {
    logoRef.current.className =
      "transition-all duration-1000 ease-in-out w-1/4 sm:self-start self-center";
  }

  useEffect(() => {
    setGrowLogoImage();
  });

  return (
    <div className="flex flex-col items-center">
      <img
        ref={logoRef}
        className="transition-all duration-1000 w-0 sm:self-start self-center"
        alt="logo"
        src="logo.png"
      />
      <p className={CS.logoText}>ExperyMint</p>
    </div>
  );
}
