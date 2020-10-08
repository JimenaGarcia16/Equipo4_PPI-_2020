import React from "react";
import Encabezado from "../Componentes/menudocente/Encabezado-MD";
import Cuerpo from "../Componentes/menudocente/Cuerpo-MD";
import Inferior from "../Componentes/menudocente/Inferior-MD";

function menuDocente() {
  return (
    <>
      <Encabezado />
      <Cuerpo />
      <Inferior />
    </>
  );
}
export default menuDocente;
