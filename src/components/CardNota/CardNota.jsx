import React, { Component } from "react";
import "./estilo.css";
import "bootstrap/dist/css/bootstrap.min.css";

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header>
          <h3 className="ms-3">{this.props.titulo}</h3>
          <p className="ms-3">{this.props.texto}</p>
        </header>
      </section>
    );
  }
}

export default CardNota;
