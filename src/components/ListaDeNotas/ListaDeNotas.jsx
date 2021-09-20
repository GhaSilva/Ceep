import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li key={index} className="card mt-3 me-4  "  >
              <div className="ms-3 mb-2">{categoria}</div>
              <CardNota></CardNota>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
