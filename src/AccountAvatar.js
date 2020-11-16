import React, { useState, useContext, useEffect } from "react";
import { getUserData, updateUserData } from "./UsersData.js";
import ThemeColorContext from "./ThemeColorContext.js";
import MyError from "./MyError.js";

export default function AccountAvatar({ userID }) {
  const themeColor = useContext(ThemeColorContext);
  const styleLikeButton = `
    shadow-md
    bg-${themeColor}-500 
    hover:bg-${themeColor}-700 
    mx-4 py-2 px-4 
    rounded 
    cursor-pointer
    focus:outline-none 
    focus:shadow-outline
    `;
  const [myError, setMyError] = useState("");
  const [userAvatar, setUserAvatar] = useState(
    getUserData(userID).avatar || null
  );

  useEffect(() => {
    const timeId = setTimeout(() => {
      setMyError("");
    }, 5000);
    return () => {
      clearTimeout(timeId);
    };
  }, [myError]);

  function handleInputForAva(event) {
    let file = event.currentTarget.files[0];
    if (!file) return;
    if (file.size > 1200000) {
      setMyError("Image is big, try to upload smaller image");
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setUserAvatar(reader.result);
      updateUserData(userID, "avatar", reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
      setMyError(reader.error);
    };
  }

  function handleDeleteAvatar() {
    updateUserData(userID, "avatar", null);
    setUserAvatar(null);
  }

  return (
    <div className="flex-1 p-4">
      {userAvatar ? (
        <div className="flex flex-col items-center">
          <img src={userAvatar} alt="avatar" />
        </div>
      ) : (
        <></>
      )}
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        encType="multipart/form-data"
      >
        <label
          title="click to set your avatar"
          className={styleLikeButton}
          htmlFor="avatar"
        >
          Avatar
        </label>
        <MyError>{myError}</MyError>
        {userAvatar ? (
          <span
            title="click to delete your avatar"
            onClick={handleDeleteAvatar}
            className={styleLikeButton}
          >
            X
          </span>
        ) : (
          <></>
        )}
        <input
          id="avatar"
          accept="image/png, image/jpeg"
          type="file"
          className="uploadAvatar"
          onChange={handleInputForAva}
        ></input>
      </form>
    </div>
  );
}
