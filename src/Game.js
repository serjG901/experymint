import React, { useEffect, useState } from "react";
import Tilt from "./Tilt";
import { updateUserResults } from "./usersData";
import { useTheme } from "./ThemeProvider";
import { useUserID } from "./UserIDProvider";
import SomeError from "./SomeError";
import StatisticOfUser from "./StatisticOfUser";
import { getRandomImage } from "./imageForGame";

export default function Game() {
  const themeColor = useTheme();
  const userID = useUserID();

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
    rounded shadow-md
    cursor-pointer
    ${themeColor.bg500} 
    ${themeColor.hbg700} 
    `;
  const styleButtonDisabled = `
    ${styleButton}
    bg-transparent 
    cursor-default
    `;

  const [numberImage, setNumberImage] = useState(getRandomImage());
  const [load, setLoad] = useState(true);
  const [choiceType, setChoiceType] = useState("");
  const [someError, setSomeError] = useState("");

  useEffect(() => {
    const timeIdChoice = setTimeout(() => setChoiceType("new"), 100);
    const timeIdLoad = setTimeout(() => setLoad(false), 1000);
    return () => {
      clearTimeout(timeIdChoice);
      clearTimeout(timeIdLoad);
    };
  }, [numberImage]);

  function handleResult(numberImage, choice) {
    setChoiceType("");
    const statusSavedResult = updateUserResults(userID, numberImage, choice);
    if (statusSavedResult) {
      const number = getRandomImage();
      if (numberImage !== number) {
        setNumberImage(number);
        return;
      }
      setNumberImage(getRandomImage());
      return;
    }
    const newError = `
      Don't saved choice,
      something wrong with server.
      `;
    setSomeError(newError);
    setChoiceType("new");
    setLoad(false);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => setSomeError(""), 5000);
    return () => clearTimeout(timeoutId);
  }, [someError]);

  function handleChoice(choice) {
    setLoad(true);
    setChoiceType(choice ? "leave" : "remove");
    setTimeout(() => handleResult(numberImage, choice), 2000);
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
            <img alt="img on wall" src={require(`../img/${numberImage}`)} />
            <SomeError w={"w-full"}>{someError}</SomeError>
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
            handleChoice(true);
          }}
        >
          Leave
        </button>
        <button
          tilte="Remove the picture"
          className={load ? styleButtonDisabled : styleButtonEnabled}
          disabled={load}
          onClick={() => {
            handleChoice(false);
          }}
        >
          Remove
        </button>
      </div>
      <div className="flex justify-center">
        <StatisticOfUser isDataChange={load} />
      </div>
    </div>
  );
}
