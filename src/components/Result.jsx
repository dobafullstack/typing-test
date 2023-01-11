import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/Result.css";

export default function Result() {
  const { done, correct } = useContext(AppContext);

  return (
    <div className="result-wrapper">
      <div className="word-per-min">
        <p>{done} WPM</p>
      </div>

      <div className="tab-wrapper">
        <div className="tab ">
          <strong>Correct words:</strong>
          <p className="correct">{correct}</p>
        </div>

        <div className="tab ">
          <strong>Incorrect words:</strong>
          <p className="incorrect">{done - correct}</p>
        </div>
      </div>
    </div>
  );
}
