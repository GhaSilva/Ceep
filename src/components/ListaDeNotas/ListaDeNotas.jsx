import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";

class ListaDeNotas extends Component {

  render() {
    return (
      <ul>
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index} className="card mt-3 me-4  "  >
              <CardNota titulo={nota.titulo} texto={nota.texto}></CardNota>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
