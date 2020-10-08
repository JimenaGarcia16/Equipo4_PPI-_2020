import React, { Component } from "react";
import "../css/menuprincipal.css";
import data from "../../Data/Anotaciones.json";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DatosFiltrados: data.filter((x) => x.idUsuario === 1),
      Estudiantes: []
    };
  }

  render() {
    return (
      <div className="container">
        <h5>Estudiante: Juan Manuel Quiroz</h5>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>Grado</th>
              <th>Nota</th>
              <th># Faltas</th>
            </tr>
          </thead>
          <tbody>
            {this.state.DatosFiltrados.map((x) => {
              return (
                <tr key={x.id}>
                  <td>{x.grado}</td>
                  <td>{x.nota}</td>
                  <td className="text-center">{x.NoFalta}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.state.DatosFiltrados.length >= 3 ? (
          <div className="text-danger">
            {" "}
            ! Atencion tienes {this.state.DatosFiltrados.length} faltas, aplicas
            para proceso disciplinario.
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Formulario;
