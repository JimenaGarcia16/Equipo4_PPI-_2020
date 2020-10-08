import React from "react";
import "../Componentes/css/menuprincipal.css";
import Cuerpo from "../Componentes/menuprincipal/Cuerpo-MP";
import Encabezado from "../Componentes/menuprincipal/Encabezado-MP";
import Footer from "../Componentes/menuprincipal/Inferior-MP";

function Menuprincipal() {
  return (
    <>
      <Encabezado />
      <Cuerpo />
      <Footer />
    </>
  );
}
export default Menuprincipal;
