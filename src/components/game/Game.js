import React, { useEffect, useState } from "react";
import Tilt from "./Tilt";
import { useTheme } from "../core/ThemeProvider";
import { useUser, useUserSet } from "../core/UserProvider";
import StatisticOfUser from "../account/StatisticOfUser";
import { getRandomImage } from "./imageForGame";

export default function Game() {
  const themeColor = useTheme();
  const user = useUser();
  const setUser = useUserSet();

  const styleButton = `
    transition-all 
    duration-1000
    flex-1 text-2xl
    mb-4 mx-4 py-2 px-4
    rounded 
    focus:outline-none 
    focus:shadow-outline
    `;
  const styleButtonEnabled = `
    ${styleButton}
    shadow-md
    cursor-pointer
    ${themeColor.bgButton} 
    ${themeColor.hbgButton} 
    `;
  const styleButtonDisabled = `
    ${styleButton}
    bg-transparent 
    cursor-default
    `;

  const [image, setImage] = useState(getRandomImage());
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
  }, [image]);

  function handleResult(image, choice) {
    setChoiceType("");
    const score = user.score ? user.score + 1 : 1;
    const mistruth = user.mistruth ? user.mistruth : 0;
    let addMistruth = 0;
    if (user.results[image] !== undefined) {
      addMistruth = user.results[image] === choice ? 0 : 1;
    }
    setUser({
      ...user,
      mistruth: mistruth + addMistruth,
      score,
      results: { ...user.results, [image]: choice }
    });

    const number = getRandomImage();
    if (image !== number) {
      setImage(number);
      return;
    }
    setImage(getRandomImage());
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => setSomeError(""), 5000);
    return () => clearTimeout(timeoutId);
  }, [someError]);

  function handleChoice(choice) {
    setLoad(true);
    setChoiceType(choice ? "leave" : "remove");
    setTimeout(() => handleResult(image, choice), 2000);
  }

  return (
    <div>
      <div className="p-2">
        {user.name}, imagine that You're the director of an modern art gallery.
        Leave on the wall pictures that you'd like.
      </div>
      <div className="flex">
        <div className="flex-1"></div>
        <Tilt className="flex-1" choiceType={choiceType}>
          <div className="totally-centered">
            <img alt="img on wall" src={require(`./img/${image}`)} />
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
        <StatisticOfUser />
      </div>
    </div>
  );
}
