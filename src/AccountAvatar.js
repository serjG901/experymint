import React, { useState, useContext } from "react";
import { getUserData, updateUserData } from "./UsersData.js";
import ThemeColorContext from "./ThemeColorContext.js";

export default function AccountAvatar({ userID }) {
  const themeColor = useContext(ThemeColorContext);

  const [userAvatar, setUserAvatar] = useState(
    getUserData(userID).avatar || null
  );

  function handleInputForAva(event) {
    let file = event.currentTarget.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setUserAvatar(reader.result);
      updateUserData(userID, "avatar", reader.result);
    };

    reader.onerror = () => {
      console.log(reader.error);
    };
  }

  function handleDeleteAvatar() {
    setUserAvatar(null);
    updateUserData(userID, "avatar", null);
  }

  return (
    <div
      className="
        flex-1 
        w-1/4 
        p-4"
    >
      {userAvatar ? (
        <div
          className="
            flex 
            flex-col 
            items-center"
        >
          <img src={userAvatar} alt="avatar" />
        </div>
      ) : (
        ""
      )}
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        encType="multipart/form-data"
      >
        <label
          title="click to set your avatar"
          className={`
            shadow-md
            bg-${themeColor}-500 
            hover:bg-${themeColor}-700 
            mb-4
            mx-4 
            py-2 
            px-4 
            rounded 
            cursor-pointer
            focus:outline-none 
            focus:shadow-outline
            `}
          htmlFor="avatar"
        >
          Avatar
        </label>
        {userAvatar ? (
          <span
            title="click to delete your avatar"
            onClick={handleDeleteAvatar}
            className={`
              shadow-md
              bg-${themeColor}-500 
              hover:bg-${themeColor}-700 
              mb-4
              mx-4 
              py-2 
              px-4 
              rounded 
              cursor-pointer
              focus:outline-none 
              focus:shadow-outline
              `}
          >
            X
          </span>
        ) : (
          ""
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
