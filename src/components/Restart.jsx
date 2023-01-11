import React, { useContext } from "react";
import "../styles/Restart.css";
import iconReset from "../icon-reset.png";
import { AppContext } from "../context/AppContext";
import json from "../data";

export default function Restart() {
  const {
    setOver,
    setStart,
    setIndex,
    setDone,
    setCorrect,
    setData,
    setRestart,
    restart
  } = useContext(AppContext);

  const handleReset = () => {
    setOver(false);
    setStart(false);
    setIndex(0);
    setDone(0);
    setCorrect(0);
    setRestart(!restart);
    setData(
      json.slice(0, 20).map((item, i) => ({
        text: item,
        correct: null,
        current: i === 0
      }))
    );
  };

  return (
    <button className="restart" onClick={() => handleReset()}>
      <img src={iconReset} alt="" />
    </button>
  );
}
