import React from "react";
import { useTheme } from "../core/ThemeProvider";

export default function AvatarSetDelete({
  avatar,
  onSetAvatar,
  onDeleteAvatar
}) {
  const themeColor = useTheme();

  const styleLikeButton = `
  transition-all 
  duration-1000
  mx-4 py-2 px-4 
  rounded shadow-md
  cursor-pointer
  focus:outline-none 
  focus:shadow-outline
  ${themeColor.bgButton}
  ${themeColor.hbgButton}
  `;

  return (
    <div>
      <label
        htmlFor="avatar"
        title="Click to set your avatar"
        className={styleLikeButton}
      >
        Avatar
      </label>
      <input
        id="avatar"
        type="file"
        accept="image/png, image/jpeg"
        className="uploadAvatar"
        onChange={onSetAvatar}
      />
      {avatar ? (
        <span
          title="Click to delete your avatar"
          className={styleLikeButton}
          onClick={onDeleteAvatar}
        >
          X
        </span>
      ) : null}
    </div>
  );
}
