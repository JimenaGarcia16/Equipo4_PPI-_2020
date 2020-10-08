import React, { Component } from "react";
import "../css/menuprincipal.css";
import data from "../../Data/Anotaciones.json";
import { Link } from "react-router-dom";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DatosFiltrados: data,
      Estudiantes: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    if (e.target.name === "estudiante") {
      if (e.target.value === "") {
        this.setState({ DatosFiltrados: data });
        return;
      }
      this.setState({
        DatosFiltrados: this.state.DatosFiltrados.filter((x) =>
          x.nombre.toUpperCase().includes(e.target.value.toUpperCase())
        )
      });
    }
    if (e.target.name === "grado") {
      if (e.target.value === "") {
        this.setState({ DatosFiltrados: data });
        return;
      }
      this.setState({
        DatosFiltrados: this.state.DatosFiltrados.filter((x) =>
          x.grado.toUpperCase().includes(e.target.value.toUpperCase())
        )
      });
    }
  }

  render() {
    return (
      <div className="container">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group mx-sm-3 mb-2">
            <label className="mr-3">Buscar estudiante:</label>
            <input
              type="text"
              className="form-control"
              placeholder=" Nombre estudiante"
              name="estudiante"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Grado Ej: 11-2"
              name="grado"
              onChange={this.handleChange}
            />
          </div>
        </form>

        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Estudiante</th>
              <th>Grado</th>
              <th>Nota</th>
              <th># Faltas</th>
            </tr>
          </thead>
          <tbody>
            {this.state.DatosFiltrados.map((x) => {
              return (
                <tr key={x.id}>
                  <td>{x.nombre}</td>
                  <td>{x.grado}</td>
                  <td>{x.nota}</td>
                  {x.NoFalta >= 3 ? (
                    <td className="text-danger text-center">
                      <button className="btn btn-danger btn-sm">
                        {x.NoFalta}. Realizar Proceso
                      </button>
                    </td>
                  ) : (
                    <td className="text-center">{x.NoFalta}</td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Formulario;
