import React from "react";
import "../css/generales.css";
import { Link } from "react-router-dom";

function cuerpoMD() {
  return (
    <>
      <div className="login text-center">
        <h1> ANOTACIONES I.E.S.E </h1>
        <h3 className="mb-5"> Docentes</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-6 recuadro">
              <h4>Formato disciplinario</h4>
              <Link to="/FormatoDisciplinario">INGRESAR</Link>
            </div>
            <div className="col-md-6 recuadro">
              <h4>Seguimiento estudiante</h4>
              <Link to="/SeguimientoDocente">INGRESAR</Link>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
export default cuerpoMD;
