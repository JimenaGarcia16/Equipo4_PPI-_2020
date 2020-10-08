import React from "react";
import "../css/generales.css";
import { Link } from "react-router-dom";

function cuerpoMD() {
  return (
    <>
      <div className="login text-center">
        <h1> ANOTACIONES I.E.S.E </h1>
        <h4 className="mb-5"> Estudiantes </h4>
        <div className="container">
          <div className="text-center recuadroEstudiantes">
            <h4>Seguimiento estudiante</h4>
            <Link to="/SeguimientoEstudiante">INGRESAR A ESTA SESION</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default cuerpoMD;
