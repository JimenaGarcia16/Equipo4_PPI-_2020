import React, { Component } from "react";

class IniciarSesion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RegistroComo: "",
      Nombre: "",
      Apellidos: "",
      Usuario: "",
      Contra: "",
      Correo: "",
      Errores: "",
      LinkAbrirRegistro: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      !this.state.RegistroComo ||
      !this.state.Nombre ||
      !this.state.Apellidos ||
      !this.state.Usuario ||
      !this.state.Contra ||
      !this.state.Correo
    ) {
      this.setState({ Errores: "Todos los campos son obligatorios" });
      return;
    }
    this.setState({ Errores: "" });
    alert("Registro correcto");
    window.location.href = "/Iniciarsesion";
  }

  handleChange(e) {
    switch (e.target.name) {
      case "Perfil":
        this.setState({ RegistroComo: e.target.value });
        break;
      case "Nombre":
        this.setState({ Nombre: e.target.value });
        break;
      case "Apellidos":
        this.setState({ Apellidos: e.target.value });
        break;
      case "Usuario":
        this.setState({ Usuario: e.target.value });
        break;
      case "Contra":
        this.setState({ Contra: e.target.value });
        break;
      case "Correo":
        this.setState({ Correo: e.target.value });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="container">
        <h2 className="mb-5">Formulario de registro</h2>

        {this.state.Errores ? (
          <div class="alert alert-danger" role="alert">
            {this.state.Errores}
          </div>
        ) : (
          ""
        )}

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              placeholder="Nombre completo"
              name="Nombre"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Apellidos</label>
            <input
              className="form-control"
              type="text"
              placeholder="Apellidos completos"
              name="Apellidos"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Usuario</label>
            <input
              className="form-control"
              type="text"
              placeholder="Cree un nombre de usuario"
              name="Usuario"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              className="form-control"
              type="password"
              placeholder="Cree una contraseña segura"
              name="Contra"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              className="form-control"
              type="mail"
              placeholder="Ingrese su correo electrónico"
              name="Correo"
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

          <br />

          {this.state.RegistroComo === "Acudiente" ? (
            <div className="form-group">
              <label>Registro del estudiante</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ingrese el numero de matricula del estudiante."
              />
            </div>
          ) : (
            ""
          )}

          <button className="btn btn-success mt-3">INGRESAR</button>
        </form>
      </div>
    );
  }
}

export default IniciarSesion;
