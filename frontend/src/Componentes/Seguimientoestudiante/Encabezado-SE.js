import React from "react";
import "../css/menuprincipal.css";
import imagen from "../../images/logo-MP.png";

function Encabezado() {
  return (
    <div className="text-center">
      <img className="img-fluid" src={imagen} alt="" /> 
      <hr />
    </div>
  );
}

export default Encabezado;
