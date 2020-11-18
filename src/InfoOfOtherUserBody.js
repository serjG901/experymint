import React from "react";
export default function InfoOfOtherUser({ avatar, tags }) {
  return (
    <div className={`flex cursor-default`}>
      <div title="Avatar" className="w-1/3 p-4">
        {avatar ? <img src={avatar} alt="avatar" /> : ""}
      </div>
      <div title="Tags" className="w-2/3 p-4">
        {tags ? (
          <p className="font-bold break-words">{tags}</p>
        ) : (
          <span className="text-gray-700">tags</span>
        )}
      </div>
    </div>
  );
}
