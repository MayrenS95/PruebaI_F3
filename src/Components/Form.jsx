import React from "react";
import { useState } from "react";
import Card from "./Card";
import Style from "../styles/Form.module.css";

const Form = () => {
  const [dato, setDatos] = useState({
    nombre: "",
    plato: "",
  });

  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    /*Validaciones*/

    if (
      dato.nombre.length > 3 &&
      dato.plato.length > 6 &&
      dato.nombre.substring(0, 1) !== " "
    ) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={Style.cardContainer}>
        <label>Ingresa tu nombre completo:</label>
        <input
          type="text"
          onChange={(event) =>
            setDatos({ ...dato, nombre: event.target.value })
          }
        ></input>

        <label>Ingresa tu comida favorita:</label>
        <input
          type="text"
          onChange={(event) => setDatos({ ...dato, plato: event.target.value })}
        ></input>

        <button type="submit">Enviar</button>

        {mostrar ? <Card nombre={dato.nombre} plato={dato.plato} /> : ""}

        {error ? (
          <h4 style={{ color: "orange" }}>
            “Por favor chequea que la información sea correcta”.
          </h4>
        ) : (
          ""
        )}
      </form>
    </>
  );
};

export default Form;
