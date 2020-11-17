import React, { useEffect, useState, useContext } from "react";
import Tilt from "./Tilt.js";
import { updateUserResults } from "./UsersData.js";
import ThemeColorContext from "./ThemeColorContext.js";
import UserIDContext from "./UserIDContext.js";
import MyError from "./MyError.js";

function getNumberImage() {
  const numberOfPictures = 129;
  return Math.round((numberOfPictures - 1) * Math.random());
}

export default function Game() {
  const themeColor = useContext(ThemeColorContext);
  const userID = useContext(UserIDContext);

  const styleButton = `
    transition-all 
    duration-1000
    flex-1 text-2xl
    mb-4 mx-4 py-2 px-4
    focus:outline-none 
    focus:shadow-outline
    `;

  const styleButtonEnabled = `
    ${styleButton}
    bg-${themeColor}-500 
    hover:bg-${themeColor}-700 
    rounded shadow-md
    cursor-pointer
    `;
  const styleButtonDisabled = `
    ${styleButton}
    bg-transparent 
    cursor-default
    `;

  const [numberImage, setNumberImage] = useState(getNumberImage());
  const [load, setLoad] = useState(true);
  const [choiceType, setChoiceType] = useState("");
  const [myError, setMyError] = useState("");

  useEffect(() => {
    const timeIdChoice = setTimeout(() => setChoiceType("new"), 100);
    const timeIdLoad = setTimeout(() => setLoad(false), 1000);
    return () => {
      clearTimeout(timeIdChoice);
      clearTimeout(timeIdLoad);
    };
  }, [numberImage]);

  function handleResult(numberImage, choiceType) {
    setChoiceType("");
    const statusSavedResult = updateUserResults(
      userID,
      numberImage,
      choiceType
    );
    if (statusSavedResult) {
      const number = getNumberImage();
      if (numberImage !== number) {
        setNumberImage(number);
        return;
      }
      setNumberImage(getNumberImage());
      return;
    }
    const newError = `
      Don't saved choice,
      something wrong with server.
      `;
    setMyError(newError);
    setChoiceType("new");
    setLoad(false);
  }

  useEffect(() => {
    const timeId = setTimeout(() => setMyError(""), 5000);
    return () => clearTimeout(timeId);
  }, [myError]);

  function handleChoice(choiceType) {
    setLoad(true);
    setChoiceType(choiceType);
    setTimeout(() => handleResult(numberImage, choiceType), 2000);
  }

  return (
    <div>
      <div className="p-2">
        {userID}, imagine that You're the director of an modern art gallery.
        Leave on the wall pictures that you'd like.
      </div>
      <div className="flex">
        <div className="flex-1"></div>
        <Tilt className="flex-1" choiceType={choiceType}>
          <div className="totally-centered">
            <img
              alt="img on wall"
              src={
                numberImage > 104
                  ? require(`../img/${numberImage}.png`)
                  : require(`../img/${numberImage}.jpg`)
              }
            />
            <MyError w={"w-full"}>{myError}</MyError>
          </div>
        </Tilt>
        <div className="flex-1"></div>
      </div>
      <div className="flex content-center p-2">
        <button
          tilte="Leave the picture"
          className={load ? styleButtonDisabled : styleButtonEnabled}
          disabled={load}
          onClick={() => {
            handleChoice(1);
          }}
        >
          Leave
        </button>
        <button
          tilte="Remove the picture"
          className={load ? styleButtonDisabled : styleButtonEnabled}
          disabled={load}
          onClick={() => {
            handleChoice(0);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
