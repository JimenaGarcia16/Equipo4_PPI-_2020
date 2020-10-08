import React from "react";
import "../Componentes/css/registrar.css";
import Encabezado from "../Componentes/SeguimientoAcudiente/Encabezado-SA";
import Formulario from "../Componentes/SeguimientoAcudiente/Formulario-SA";
import Inferior from "../Componentes/SeguimientoAcudiente/Inferior-SA";

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
