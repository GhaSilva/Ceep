import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/";
import ListaDeNotas from "./components/ListaDeNotas/";
import Cabecalho from "./components/Cabecalho/";
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section className="container card">
        <Cabecalho></Cabecalho>
        <FormularioCadastro></FormularioCadastro>
        <ListaDeNotas></ListaDeNotas>
      </section>
    );
  }
}

export default App;
