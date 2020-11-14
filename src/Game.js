import React, { useEffect, useState } from "react";
import Tilt from "./Tilt.js";
import { updateUserResults } from "./UsersData.js";

function getNumberImage() {
  const numberOfPictures = 129;
  return Math.round((numberOfPictures - 1) * Math.random());
}

function Game({ CS, userID }) {
  const [numberImage, setNumberImage] = useState(getNumberImage());
  const [load, setLoad] = useState(true);
  const [choiceType, setChoiceType] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setChoiceType("new");
    }, 100);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
    console.log(numberImage);
  }, [numberImage]);

  function handleResult(numberImage, choiceType) {
    setChoiceType("");
    const statusSavedResult = updateUserResults(userID, [
      numberImage,
      choiceType
    ]);
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
    <div className={CS.Main}>
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
          ${CS.buttonSend}
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
          ${CS.buttonSend}
          `}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Game;
