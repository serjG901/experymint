<<<<<<< Updated upstream
import React, { useContext } from "react";
import ThemeColorContext from "./ThemeColorContext.js";

export default function InfoOfOtherUser({
  name,
  indexOfClosest,
  mistruth,
  manifest
}) {
  const themeColor = useContext(ThemeColorContext);
  return (
    <div
      className={`flex items-center p-2 my-2 cursor-pointer ${themeColor.hbg400}`}
    >
      <div className="flex w-1/2 items-center">
        <div title="Name" className="flex-1 font-bold w-1/2 break-word">
          {name}
        </div>
        <div className="flex-1">
          <div title="Index of closest">
            <span className="text-gray-700">IC:</span>
            {indexOfClosest.IC}
          </div>
          <div title="Amount of compared pictures">
            <span className="text-gray-700">Am:</span>
            {indexOfClosest.amount}
          </div>
          <div title="Mistruth">
            <span className="text-gray-700">MT:</span>
            {mistruth}
          </div>
        </div>
      </div>

      <div title="Manifest" className="w-1/2">
        {manifest ? (
          <p className="font-bold break-words">{manifest}</p>
        ) : (
          <span className="text-gray-700">manifest</span>
        )}
      </div>
    </div>
  );
}
=======
<<<<<<< HEAD
import React, { useContext } from "react";
import ThemeColorContext from "./ThemeColorContext.js";

export default function InfoOfOtherUser({
  name,
  indexOfClosest,
  mistruth,
  manifest
}) {
  const themeColor = useContext(ThemeColorContext);
  return (
    <div
      className={`flex items-center p-2 my-2 cursor-pointer ${themeColor.hbg400}`}
    >
      <div className="flex w-1/2 items-center">
        <div title="Name" className="flex-1 font-bold w-1/2 break-word">
          {name}
        </div>
        <div className="flex-1">
          <div title="Index of closest">
            <span className="text-gray-700">IC:</span>
            {indexOfClosest.IC}
          </div>
          <div title="Amount of compared pictures">
            <span className="text-gray-700">Am:</span>
            {indexOfClosest.amount}
          </div>
          <div title="Mistruth">
            <span className="text-gray-700">MT:</span>
            {mistruth}
          </div>
        </div>
      </div>

      <div title="Manifest" className="w-1/2">
        {manifest ? (
          <p className="font-bold break-words">{manifest}</p>
        ) : (
          <span className="text-gray-700">manifest</span>
        )}
      </div>
    </div>
  );
}
=======
import React, { useContext } from "react";
import ThemeColorContext from "./ThemeColorContext.js";

export default function InfoOfOtherUser({
  name,
  indexOfClosest,
  mistruth,
  manifest
}) {
  const themeColor = useContext(ThemeColorContext);
  return (
    <div
      className={`flex items-center p-2 my-2 cursor-pointer ${themeColor.hbg400}`}
    >
      <div className="flex w-1/2 items-center">
        <div title="Name" className="flex-1 font-bold w-1/2 break-word">
          {name}
        </div>
        <div className="flex-1">
          <div title="Index of closest">
            <span className="text-gray-700">IC:</span>
            {indexOfClosest.IC}
          </div>
          <div title="Amount of compared pictures">
            <span className="text-gray-700">Am:</span>
            {indexOfClosest.amount}
          </div>
          <div title="Mistruth">
            <span className="text-gray-700">MT:</span>
            {mistruth}
          </div>
        </div>
      </div>

      <div title="Manifest" className="w-1/2">
        {manifest ? (
          <p className="font-bold break-words">{manifest}</p>
        ) : (
          <span className="text-gray-700">manifest</span>
        )}
      </div>
    </div>
  );
}
>>>>>>> 9960fefdbad533379f8a269b6b6b8b17339bba38
>>>>>>> Stashed changes
