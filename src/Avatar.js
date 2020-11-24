import React, { useState, useEffect } from "react";
import { getUserData, updateUserData } from "./usersData";
import { useTheme } from "./ThemeProvider";
import SomeError from "./SomeError";
import { useUserID } from "./UserIDProvider";

export default function Avatar() {
  const userID = useUserID();
  const themeColor = useTheme();
  const [someError, setSomeError] = useState("");
  const [userAvatar, setUserAvatar] = useState(null);
  const styleLikeButton = `
    transition-all 
    duration-1000
    mx-4 py-2 px-4 
    rounded shadow-md
    cursor-pointer
    focus:outline-none 
    focus:shadow-outline
    ${themeColor.bg500}
    ${themeColor.hbg700}
    `;

  useEffect(() => {
    setUserAvatar(getUserData(userID).avatar);
  }, [userID]);

  useEffect(() => {
    if (someError === "") return;
    const timeoutId = setTimeout(() => setSomeError(""), 5000);
    return () => clearTimeout(timeoutId);
  }, [someError]);

  function handleInputAvatar(event) {
    const file = event.currentTarget.files[0];
    if (!file) return;
    if (file.size > 1200000) {
      const newError = `
      This image is big,
      try to upload smaller image (less than 1,2Mb)
      `;
      setSomeError(newError);
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setUserAvatar(reader.result);
      updateUserData(userID, "avatar", reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
      const newError = `
      Failed to read file,
      try to upload other image
      `;
      setSomeError(newError);
    };
  }

  function handleDeleteAvatar() {
    updateUserData(userID, "avatar", null);
    setUserAvatar(null);
  }

  return (
    <div className="p-4">
      {userAvatar ? (
        <img src={userAvatar} alt="avatar" className="inline-block" />
      ) : null}
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
        <SomeError>{someError}</SomeError>
        {userAvatar ? (
          <span
            title="Click to delete your avatar"
            className={styleLikeButton}
            onClick={handleDeleteAvatar}
          >
            X
          </span>
        ) : null}
        <input
          id="avatar"
          type="file"
          accept="image/png, image/jpeg"
          className="uploadAvatar"
          onChange={handleInputAvatar}
        />
      </form>
    </div>
  );
}
