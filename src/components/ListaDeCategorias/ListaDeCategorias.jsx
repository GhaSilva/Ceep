import React from "react";
class ListaDeCategorias extends React.Component {

    _handleEventoInput(evento){
      if(evento.key === "Enter"){
        let valorCategoria = evento.target.value
        this.props.adicionarCategoria(valorCategoria)
      }
    }
  render() {
    return (
      <section>
        <div className="card">
          <ul className="row mt-3">
            {this.props.categorias.map((categoria, index) =>{
              return <li key={index} className="col-2 btn btn-dark ms-1 mt-1">{categoria}</li>
            })}
            
          </ul>
          <input type="text" className="col-2 ms-3 mb-3" placeholder="        Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}/>
        </div>
      </section>
    );
  }
}

export default ListaDeCategorias;
