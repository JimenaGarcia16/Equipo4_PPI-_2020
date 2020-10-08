import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/iniciarsesion.css";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Usuario: "",
      Contra: "",
      Errores: "",
      UrlPeril: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    switch (e.target.name) {
      case "Perfil":
        switch (e.target.value) {
          case "Docente":
            this.setState({ UrlPeril: "/MenuDocente" });
            break;
          case "Estudiante":
            this.setState({ UrlPeril: "/MenuEstudiante" });
            break;
          case "Acudiente":
            this.setState({ UrlPeril: "/MenuAcudiente" });
            break;
          default:
            break;
        }
        break;
      case "Usuario":
        this.setState({ Usuario: e.target.value });
        break;
      case "Contra":
        this.setState({ Contra: e.target.value });
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">INGRESE SUS DATOS</h1>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Nombre usuario"
            name="Usuario"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Contraseña de ingreso"
            name="Contra"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="Perfil"
            value="Docente"
            onChange={this.handleChange}
          />
          <label className="form-check-label">Docente</label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="Perfil"
            value="Estudiante"
            onChange={this.handleChange}
          />
          <label className="form-check-label">Estudiante</label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="Perfil"
            value="Acudiente"
            onChange={this.handleChange}
          />
          <label className="form-check-label">Acudiente</label>
        </div>

        <button className="  btn-block" type="submit">
          ¿Olvidaste la contraseña?
        </button>
        <button className="btn btn-lg btn-success btn-block" type="submit">
          {this.state.UrlPeril && this.state.Usuario && this.state.Contra ? (
            <Link className="boton" to={this.state.UrlPeril}>
              Ingresar
            </Link>
          ) : (
            "Ingresar"
          )}
        </button>
      </form>
    );
  }
}

export default Formulario;
