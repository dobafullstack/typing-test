import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/TextMonitor.css";
import Item from "./Item";

export default function TextMonitor() {
  const { data, index } = useContext(AppContext);

  return (
    <div className="tm-wrapper">
      {data.map((item, i) => (
        <Item item={item} selected={i === index} key={item.text} />
      ))}
    </div>
  );
}
