import React, { useState, useContext, useEffect } from "react";
import { getUserData, updateUserData } from "./UsersData.js";
import ThemeColorContext from "./ThemeColorContext.js";
import MyError from "./MyError.js";
import UserIDContext from "./UserIDContext.js";

export default function AvatarOfUser() {
  const userID = useContext(UserIDContext);
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
      setMyError(
        "This image is big, try to upload smaller image (less than 1,2Mb)"
      );
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
        encType="multipart/form-data"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label
          htmlFor="avatar"
          title="click to set your avatar"
          className={styleLikeButton}
        >
          Avatar
        </label>
        <MyError>{myError}</MyError>
        {userAvatar ? (
          <span
            title="click to delete your avatar"
            className={styleLikeButton}
            onClick={handleDeleteAvatar}
          >
            X
          </span>
        ) : (
          <></>
        )}
        <input
          id="avatar"
          type="file"
          accept="image/png, image/jpeg"
          className="uploadAvatar"
          onChange={handleInputForAva}
        ></input>
      </form>
    </div>
  );
}
