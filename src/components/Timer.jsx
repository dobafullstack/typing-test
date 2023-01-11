import React, { useContext, useEffect, useState } from "react";
import "../styles/Timer.css";
import { AppContext } from "../context/AppContext";

export default function Timer() {
  const [seconds, setSeconds] = useState(60);
  const [timer, setTimer] = useState(
    `${Math.floor(seconds / 60)}:${
      seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60
    }`
  );

  const { start, setOver, restart } = useContext(AppContext);

  useEffect(() => {
    let myInterval;

    if (start) {
      myInterval = setInterval(() => {
        if (seconds <= 0) {
          clearInterval(myInterval);
          setTimer(`0:00`);
          setOver(true);
          return;
        }

        const minute = Math.floor(seconds / 60);
        const second = seconds % 60;

        setTimer(`${minute}:${second < 10 ? `0${second}` : second}`);
        setSeconds(seconds - 1);
      }, 1000);
    }

    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    setSeconds(60);
    setTimer(`1:00`);
  }, [restart]);

  return <div className="timer">{timer}</div>;
}
