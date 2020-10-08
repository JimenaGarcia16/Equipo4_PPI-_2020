import React from "react";
import "../Componentes/css/registrar.css";
import Encabezado from "../Componentes/registrar/Encabezado-R";
import Formulario from "../Componentes/registrar/Formulario-R";
import Inferior from "../Componentes/registrar/Inferior-R";

function Iniciarsesion() {
  return (
    <>
      <Encabezado />
      <Formulario />
      <Inferior />
    </>
  );
}

export default Iniciarsesion;
