import React from "react";
import "../Componentes/css/registrar.css";
import Encabezado from "../Componentes/Seguimientoestudiante/Encabezado-SE";
import Formulario from "../Componentes/Seguimientoestudiante/Formulario-SE";
import Inferior from "../Componentes/Seguimientoestudiante/Inferior-SE";

function SeguimientoDocente() {
  return (
    <>
      <Encabezado />
      <Formulario />
      <Inferior />
    </>
  );
}

export default SeguimientoDocente;
