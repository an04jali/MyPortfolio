import React from "react";
import "./card2.css";

function Card2({ title, content }) {
  return (
    <div className="card2">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card2;
