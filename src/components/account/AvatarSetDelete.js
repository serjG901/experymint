import React from "react";
import { useTheme } from "../core/ThemeProvider";
import { useUser, useUserSet } from "../core/UserProvider";
import Resizer from "react-image-file-resizer";

export default function AvatarSetDelete() {
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

  const user = useUser();
  const setUser = useUserSet();

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        400,
        400,
        "PNG",
        50,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  async function handleSetAvatar(event) {
    const file = event.currentTarget.files[0];
    if (!file) return;
    const image = await resizeFile(file);
    setUser({ ...user, avatar: image });
  }

  function handleDeleteAvatar() {
    setUser({ ...user, avatar: "" });
  }

  return (
    <form
      encType="multipart/form-data"
      onSubmit={(event) => event.preventDefault()}
    >
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
        onChange={handleSetAvatar}
      />
      {user.avatar ? (
        <span
          title="Click to delete your avatar"
          className={styleLikeButton}
          onClick={handleDeleteAvatar}
        >
          X
        </span>
      ) : null}
    </form>
  );
}
