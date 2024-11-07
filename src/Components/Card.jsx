import React from "react";
import CardStyles from "../styles/Card.module.css";

const Card = ({ nombre, plato }) => {
  return (
    <div className={CardStyles.cardContainer}>
      <h2>{nombre}</h2>
      <h4>{plato}</h4>
      <button type="submit">Ordena Aquí!</button>
    </div>
  );
};

export default Card;
