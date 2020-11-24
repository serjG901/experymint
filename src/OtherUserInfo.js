import React from "react";
export default function OtherUserInfo({
  avatar,
  tags,
  indexOfClosest,
  mistruth
}) {
  return (
    <div>
      <div className="flex">
        <div className="w-1/3">
          <span className="text-gray-700">closeness:</span>
          {indexOfClosest.index}
        </div>
        <div className="w-1/3">
          <span className="text-gray-700">compared pictures:</span>
          {indexOfClosest.amount}
        </div>
        <div className="w-1/3">
          <span className="text-gray-700">mistruth:</span>
          {mistruth}
        </div>
      </div>
      <div className="flex cursor-default">
        <div title="Avatar" className="w-1/2 p-4">
          {avatar ? (
            <img src={avatar} alt="avatar" className="inline-block" />
          ) : (
            ""
          )}
        </div>
        <div title="Tags" className="w-1/2 p-4">
          {tags ? (
            <p className="font-bold break-words">{tags}</p>
          ) : (
            <span className="text-gray-700">tags</span>
          )}
        </div>
      </div>
    </div>
  );
}
