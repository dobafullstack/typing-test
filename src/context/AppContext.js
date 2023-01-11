import { createContext, useState } from "react";
import json from "../data";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [over, setOver] = useState(false);
  const [start, setStart] = useState(false);
  const [restart, setRestart] = useState(false);

  const [data, setData] = useState(
    json.slice(0, 20).map((item, i) => ({
      text: item,
      correct: null,
      current: i === 0
    }))
  );

  return (
    <AppContext.Provider
      value={{
        data,
        index,
        done,
        correct,
        over,
        start,
        restart,
        setRestart,
        setStart,
        setOver,
        setCorrect,
        setDone,
        setIndex,
        setData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
