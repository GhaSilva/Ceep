import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import Cabecalho from "./components/Cabecalho";

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
