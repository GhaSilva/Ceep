import React, { Component } from "react";

class FormularioCadastro extends Component {

constructor(props){
  super(props);
  this.titulo = " ";
  this.texto = " ";
}
  _handlerMudancaDeTitulo(evento){
    this.titulo = evento.target.value
  }
  _handlerMudancaDeTexto(evento){
    this.texto = evento.target.value;
  }
  _criarNota(evento){
    evento.preventDefault()
    evento.stopPropagation()
    this.props.criarNota(this.titulo, this.texto)
    
  }
  render() {
    return (
      <form
      onSubmit={this._criarNota.bind(this)}>
        <input
          className="form-control mb-3 mt-3"
          id="exampleFormControlInput1"
          type="text"
          placeholder="Título"
          onChange={this._handlerMudancaDeTitulo.bind(this)}
        />
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Escreva sua nota"
          onChange={this._handlerMudancaDeTexto.bind(this)}
        />
        <button type="submit" className="btn btn-dark mt-3 mb-3">
          Criar Nota
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
