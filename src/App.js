import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/";
import ListaDeNotas from "./components/ListaDeNotas/";
import Cabecalho from "./components/Cabecalho/";
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  
  constructor(){
    super()
    this.notas = [];
    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="container card">
        <Cabecalho></Cabecalho>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}></FormularioCadastro>
        <ListaDeNotas notas={this.state.notas}></ListaDeNotas>
      </section>
    );
  }
}

export default App;
