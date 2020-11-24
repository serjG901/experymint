import React from "react";

export default function InfoOtherUser({ name, manifest }) {
  return (
    <div className={`flex items-center p-2 my-2`}>
      <div className="w-1/2 items-center">
        <div className="font-bold break-word">{name}</div>
      </div>

      <div className="w-1/2">
        {manifest ? (
          <p className="font-bold break-words">{manifest}</p>
        ) : (
          <span className="text-gray-700">manifest</span>
        )}
      </div>
    </div>
  );
}
