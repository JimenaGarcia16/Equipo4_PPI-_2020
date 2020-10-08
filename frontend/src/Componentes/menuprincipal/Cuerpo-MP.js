import React from "react";
import { Link } from "react-router-dom";
import "../css/menuprincipal.css";
import "../../Pages/Menuprincipal";

function menuprincipal() {
  return (
    <>
      <div className="login text-center">
        <h1 className="titulo"> ANOTACIONES I.E.S.E </h1>
        <Link to="/Iniciarsesion" className="b1">
          {" "}
          INICIAR SESION{" "}
        </Link>
        <Link to="/Registrar" className="b2">
          {" "}
          REGISTRARSE{" "}
        </Link>
      </div>
      <div></div>
    </>
  );
}
export default menuprincipal;
