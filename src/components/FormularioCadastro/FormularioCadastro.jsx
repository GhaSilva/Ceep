import React, { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input className="form-control mb-3 mt-3" id="exampleFormControlInput1" type="text" placeholder="Título" />
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escreva sua nota" />
        <button type="button" className="btn btn-dark mt-3 mb-3">Criar Nota</button>
      </form>
    );
  }
}
export default FormularioCadastro;
