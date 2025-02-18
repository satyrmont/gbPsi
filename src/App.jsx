import React from "react";
import Nav from "./components/Nav.component.jsx";

import Logo from "./pages/0-Logo.page.jsx";
import Cura from "./pages/1-Cura.page.jsx";
import ComoFunciona from "./pages/2-Trajetoria.page.jsx";
import Buscamos from "./pages/3-TerapiaAjuda.page.jsx";
import Contribuicao from "./pages/4-ComoAcontece.page.jsx";
import Historico from "./pages/5-Melhora.page.jsx";
import Balanco from "./pages/6-Contato.page.jsx";
import Contato from "./pages/7-Mapa.page.jsx";

import { MobileProvider } from "./context/mobileContext.jsx";

function App() {
  return (
    <React.Fragment>
      <MobileProvider>
        <Nav />
        <Logo />
        <Cura />
        <ComoFunciona />
        <Contribuicao />
        <Buscamos />
        <Historico />
        <Balanco />
        <Contato />
      </MobileProvider>
    </React.Fragment>
  );
}

export default App;
