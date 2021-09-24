import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index} className="card mt-3 me-4 " ket={index}>
              <CardNota
                titulo={nota.titulo}
                texto={nota.texto}
                apagarNota={this.props.apagarNota}
                indice={index}
                categoria={nota.categoria}
              ></CardNota>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
