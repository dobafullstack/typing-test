import React from "react";

export default function Item({ item, selected }) {
  const background = selected ? "rgba(128, 128, 128, 0.5)" : null;
  const color =
    item.correct === null ? "black" : item.correct ? "green" : "red";

  return (
    <p
      style={{
        display: "inline-block",
        color,
        background,
        padding: "0 0.3rem",
        marginRight: "0.05rem",
        borderRadius: "0.2rem"
      }}
    >
      {item.text}
    </p>
  );
}
