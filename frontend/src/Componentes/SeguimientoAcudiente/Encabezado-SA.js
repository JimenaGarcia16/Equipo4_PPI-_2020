import React from "react";
import "../css/menuprincipal.css";
import imagen from "../../images/logo-MP.png";

function Encabezado() {
  return (
    <div className="text-center">
      <img src={imagen} alt="" />
      <hr />
    </div>
  );
}

export default Encabezado;
