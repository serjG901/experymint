import React from "react";
import { useUser, useUserSet } from "../core/UserProvider";
import AvatarSetDelete from "./AvatarSetDelete";
import { usePushUpErrorSet } from "../core/PushUpErrorProvider";

export default function Avatar() {
  const user = useUser();
  const setUser = useUserSet();
  const setPushUpError = usePushUpErrorSet();

  function handleSetAvatar(event) {
    const file = event.currentTarget.files[0];
    if (!file) return;
    if (file.size > 1200000) {
      const newError = `
      This image is big,
      try to upload smaller image 
      (less than 1,2Mb)
      `;
      setPushUpError(newError);
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setUser({ ...user, avatar: reader.result });
    };
    reader.onerror = () => {
      console.log(reader.error);
      const newError = `
      Failed to read file,
      try to upload other image
      `;
      setPushUpError(newError);
    };
  }

  function handleDeleteAvatar() {
    setUser({ ...user, avatar: "" });
  }

  return (
    <div className="p-4">
      {user.avatar ? (
        <img src={user.avatar} alt="avatar" className="inline-block" />
      ) : null}
      <form
        encType="multipart/form-data"
        onSubmit={(event) => event.preventDefault()}
      >
        <AvatarSetDelete
          avatar={user.avatar}
          onSetAvatar={handleSetAvatar}
          onDeleteAvatar={handleDeleteAvatar}
        />
      </form>
    </div>
  );
}
