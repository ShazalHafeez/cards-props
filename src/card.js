import React from "react";
import "./card.css";

const Card = (porps) => {
  return (
    <div className="card">
      <img className="card-image" src={porps.profile} alt="Dr. Yasir Ali" />
      <h1 style={{ textAlign: "center" }}>{porps.name}</h1>
      <h2 style={{ textAlign: "center" }}>{porps.rank}</h2>
      <p style={{ textAlign: "center", color: "grey" }}>{porps.prof}</p>
      <button className="button">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-whatsapp"></i>
      </button>
    </div>
  );
};
export default Card;
