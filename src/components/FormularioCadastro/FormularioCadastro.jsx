import React, { Component } from "react";

class FormularioCadastro extends Component {

constructor(){
  super();
  this.titulo = " ";
}
  handlerMudancaDeTitulo(evento){
    this.titulo = evento.target.value
    console.log(this.titulo);
  }
  render() {
    return (
      <form>
        <input
          className="form-control mb-3 mt-3"
          id="exampleFormControlInput1"
          type="text"
          placeholder="Título"
          onChange={this.handlerMudancaDeTitulo.bind(this)}
        />
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Escreva sua nota"
        />
        <button type="submit" className="btn btn-dark mt-3 mb-3">
          Criar Nota
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
