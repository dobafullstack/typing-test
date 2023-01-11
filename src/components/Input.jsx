import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/Input.css";
import json from "../data";

export default function Input() {
  const [text, setText] = useState("");
  const {
    index,
    setIndex,
    data,
    setData,
    done,
    setDone,
    correct,
    setCorrect,
    over,
    setOver,
    start,
    setStart
  } = useContext(AppContext);

  const handleChange = (value) => {
    setText(value);
  };

  const handleSpace = (e) => {
    if (!start) setStart(true);

    if (e.key === " ") {
      const currentText = data[index].text;
      let dataTemp = data;

      if (text.trim() !== currentText) {
        dataTemp[index].correct = false;
      } else {
        dataTemp[index].correct = true;
        setCorrect(correct + 1);
      }

      if ((index + 1) % 10 === 0) {
        setData(
          json.slice(done + 1, done + 21).map((item, i) => ({
            text: item,
            correct: null,
            current: i === 0
          }))
        );
        setIndex(0);
        setText("".trim());

        return;
      }

      setDone(done + 1);
      setText("".trim());

      if (done + 1 >= json.length - 1) {
        setOver(true);
        return;
      }

      setIndex(index + 1);
    }
  };

  return (
    <input
      type="text"
      className="input"
      value={text}
      onChange={(e) => handleChange(e.target.value)}
      onKeyDown={handleSpace}
      disabled={over}
    />
  );
}
