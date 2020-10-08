import React, { Component } from "react";
import "../css/iniciarsesion.css";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Errores: "",
      NombreEstudiante: "",
      NombreDocente: "",
      Tipo: "",
      DescargosDocente: "",
      DescargosEstudiante: "",
      FirmaDocente: "",
      FirmaEstudiante: "",
      FirmaTestigo: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const estado = this.state;
    if (
      !estado.NombreEstudiante ||
      !estado.NombreDocente ||
      !estado.Tipo ||
      !estado.DescargosDocente ||
      !estado.DescargosEstudiante ||
      !estado.FirmaDocente ||
      !estado.FirmaEstudiante ||
      !estado.FirmaTestigo
    ) {
      this.setState({ Errores: "Todos los campos son requeridos" });
      return;
    }
    this.setState({ Errores: "" });
    alert("Anotacion registrada correctamente.");
    window.location.href = "/MenuDocente";
  }

  handleChange(e) {
    switch (e.target.name) {
      case "NombreEstudiante":
        this.setState({ NombreEstudiante: e.target.value });
        break;
      case "NombreDocente":
        this.setState({ NombreDocente: e.target.value });
        break;
      case "Tipo":
        this.setState({ Tipo: e.target.value });
        break;
      case "DescargosDocente":
        this.setState({ DescargosDocente: e.target.value });
        break;
      case "DescargosEstudiante":
        this.setState({ DescargosEstudiante: e.target.value });
        break;
      case "FirmaDocente":
        this.setState({ FirmaDocente: e.target.value });
        break;
      case "FirmaEstudiante":
        this.setState({ FirmaEstudiante: e.target.value });
        break;
      case "FirmaTestigo":
        this.setState({ FirmaTestigo: e.target.value });
        break;

      default:
        break;
    }
  }
  render() {
    return (
      <div className="container">
        {this.state.Errores ? (
          <div className="alert alert-danger" role="alert">
            {this.state.Errores}
          </div>
        ) : (
          ""
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre del estudiante</label>
            <input
              className="form-control"
              type="text"
              placeholder="Nombre completo del estudiante"
              name="NombreEstudiante"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Nombre del docente</label>
            <input
              className="form-control"
              type="text"
              placeholder="Nombre completo del docente"
              name="NombreDocente"
              onChange={this.handleChange}
            />
          </div>

          <label className="mr-3">Tipo falta:</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Tipo"
              value="Docente"
              onChange={this.handleChange}
            />
            <label className="form-check-label">Tipo1</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Tipo"
              value="Estudiante"
              onChange={this.handleChange}
            />
            <label className="form-check-label">Tipo2</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Tipo"
              value="Acudiente"
              onChange={this.handleChange}
            />
            <label className="form-check-label">Tipo3</label>
          </div>

          <div className="form-group">
            <label>Descargos del docente</label>
            <textarea
              className="form-control"
              type="text"
              placeholder="Detalle de la falta por parte del docente"
              name="DescargosDocente"
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Descargos del estudiante</label>
            <textarea
              className="form-control"
              type="text"
              placeholder="Detalle de la falta por parte del estudiante"
              name="DescargosEstudiante"
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Firma "
                name="FirmaDocente"
                onChange={this.handleChange}
              />
              <label>Firma docente</label>
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Firma"
                name="FirmaEstudiante"
                onChange={this.handleChange}
              />
              <label>Firma estudiante</label>
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Firma"
                name="FirmaTestigo"
                onChange={this.handleChange}
              />
              <label>Firma testigo</label>
            </div>
          </div>
          <button className="btn btn-success mt-4">Regitrar anotación</button>
        </form>
      </div>
    );
  }
}

export default Formulario;
