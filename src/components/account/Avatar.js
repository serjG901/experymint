import React, { useState, useEffect } from "react";
import {
  usePropertyUser,
  usePropertyUserSet,
  useNamePropertyUserSet
} from "../core/PropertyUserProvider";
import SomeError from "../common/SomeError";
import AvatarSetDelete from "./AvatarSetDelete";

export default function Avatar() {
  const namePropertyUserSet = useNamePropertyUserSet();
  const avatar = usePropertyUser();
  const avatarSet = usePropertyUserSet();

  useEffect(() => {
    namePropertyUserSet("avatar");
  });

  const [someError, setSomeError] = useState("");

  useEffect(() => {
    if (someError === "") return;
    const timeoutId = setTimeout(() => setSomeError(""), 5000);
    return () => clearTimeout(timeoutId);
  }, [someError]);

  function handleSetAvatar(event) {
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
      avatarSet(reader.result);
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
    avatarSet(null);
  }

  return (
    <div className="p-4">
      {avatar ? (
        <img src={avatar} alt="avatar" className="inline-block" />
      ) : null}
      <form
        encType="multipart/form-data"
        onSubmit={(event) => event.preventDefault()}
      >
        <AvatarSetDelete
          avatar={avatar}
          onSetAvatar={handleSetAvatar}
          onDeleteAvatar={handleDeleteAvatar}
        />
        <SomeError>{someError}</SomeError>
      </form>
    </div>
  );
}
