import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/";
import ListaDeNotas from "./components/ListaDeNotas/";
import Cabecalho from "./components/Cabecalho/";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  apagarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = { ...this.state, categorias: novoArrayCategorias };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="container card">
        <Cabecalho></Cabecalho>
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        ></FormularioCadastro>
        <main>
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          ></ListaDeCategorias>
          <ListaDeNotas
            notas={this.state.notas}
            className="col-3"
            apagarNota={this.apagarNota.bind(this)}
          ></ListaDeNotas>
        </main>
      </section>
    );
  }
}

export default App;
