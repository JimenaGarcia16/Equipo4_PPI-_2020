import React from "react";
import "../Componentes/css/registrar.css";
import Encabezado from "../Componentes/SeguimientoDocente/Encabezado-SD";
import Formulario from "../Componentes/SeguimientoDocente/Formulario-SD";
import Inferior from "../Componentes/SeguimientoDocente/Inferior-SD";

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
