import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menuprincipal from "../Pages/Menuprincipal";
import Iniciarsesion from "../Pages/Iniciarsesion";
import Registrar from "../Pages/Registrar";
import MenuDocente from "../Pages/MenuDocente";
import MenuEstudiante from "../Pages/MenuEstudiante";
import MenuAcudiente from "../Pages/MenuAcudiente";
import FormatoDisciplinario from "../Pages/FormatoDisciplinario";
import SeguimientoAcudiente from "../Pages/SeguimientoAcudiente";
import SeguimientoDocente from "../Pages/SeguimientoDocente";
import SeguimientoEstudiante from "../Pages/SeguimientoEstudiante";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Menuprincipal} />
          <Route exact path="/Iniciarsesion" component={Iniciarsesion} />
          <Route exact path="/Registrar" component={Registrar} />
          <Route exact path="/MenuDocente" component={MenuDocente} />
          <Route exact path="/MenuEstudiante" component={MenuEstudiante} />
          <Route exact path="/MenuAcudiente" component={MenuAcudiente} />
          <Route
            exact
            path="/FormatoDisciplinario"
            component={FormatoDisciplinario}
          />
          <Route
            exact
            path="/SeguimientoAcudiente"
            component={SeguimientoAcudiente}
          />
          <Route
            exact
            path="/SeguimientoDocente"
            component={SeguimientoDocente}
          />
          <Route
            exact
            path="/SeguimientoEstudiante"
            component={SeguimientoEstudiante}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
