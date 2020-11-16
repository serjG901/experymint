import React, { useEffect, useState, useContext } from "react";
import Tilt from "./Tilt.js";
import { updateUserResults } from "./UsersData.js";
import ThemeColorContext from "./ThemeColorContext.js";

function getNumberImage() {
  const numberOfPictures = 129;
  return Math.round((numberOfPictures - 1) * Math.random());
}

export default function Game({ userID }) {
  const themeColor = useContext(ThemeColorContext);

  const [numberImage, setNumberImage] = useState(getNumberImage());
  const [load, setLoad] = useState(true);
  const [choiceType, setChoiceType] = useState("");

  useEffect(() => {
    const timeIdChoice = setTimeout(() => {
      setChoiceType("new");
    }, 100);
    const timeIdLoad = setTimeout(() => {
      setLoad(false);
    }, 1000);
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
    } else {
      setLoad(false);
      return;
    }
  }

  function handleChoice(choiceType) {
    setLoad(true);
    setChoiceType(choiceType);
    setTimeout(() => handleResult(numberImage, choiceType), 2000);
  }

  return (
    <div
      className={`
        h-screen
        App
        text-white
        bg-gradient-to-b 
        from-${themeColor}-500
        via-${themeColor}-600 
        to-${themeColor}-300
        `}
    >
      <div className="p-2">
        {userID}, imagine that You are the director of an art gallery. Leave the
        right pictures on the walls.
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
          </div>
        </Tilt>
        <div className="flex-1"></div>
      </div>
      <div className="flex content-center p-2">
        <button
          tilte="leave picture"
          onClick={() => {
            handleChoice(1);
          }}
          disabled={load}
          className={`
            flex-1 
            text-2xl
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
          Leave
        </button>
        <button
          tilte="remove picture"
          onClick={() => {
            handleChoice(0);
          }}
          disabled={load}
          className={`
            flex-1 
            text-2xl
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
          Remove
        </button>
      </div>
    </div>
  );
}
