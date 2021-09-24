import React, { Component } from "react";
import { ReactComponent as DeleteSVG } from '../../assets/delete.svg';
import "./estilo.css";
import "bootstrap/dist/css/bootstrap.min.css";


class CardNota extends Component {

  apagarNota(){
    const indice = this.props.indice
    this.props.apagarNota(indice)
  }
  render() {
    return (
      <section className="card-nota">
        <header>
          <div className="row">
          <div className="card mt-3 me-4">
          <h5 className="mt-3 ms-3">{this.props.categoria}</h5>
          </div>
          <h3 className="ms-3 col-10">{this.props.titulo}</h3>
          <DeleteSVG className="col-1 mt-4" onClick={this.apagarNota.bind(this)} />
          
          </div>
          <p className="ms-3">{this.props.texto}</p>
        </header>
      </section>
    );
  }
}

export default CardNota;
