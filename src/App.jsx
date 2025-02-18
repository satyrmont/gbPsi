import React from "react";
import Nav from "./components/Nav.component.jsx";

import Logo from "./pages/0-Logo.page.jsx";
import Intro from "./pages/1-Intro.page.jsx";
import Trajetoria from "./pages/2-Trajetoria.page.jsx";
import ComoAjuda from "./pages/3-ComoAjuda.page.jsx";
import ComoAcontece from "./pages/4-ComoAcontece.page.jsx";
import oQueEsperar from "./pages/5-oQueEsperar.page.jsx";
import Contato from "./pages/6-Contato.page.jsx";
import Mapa from "./pages/7-Mapa.page.jsx";

import { MobileProvider } from "./context/mobileContext.jsx";

function App() {
  return (
    <React.Fragment>
      <MobileProvider>
        <Nav />
        <Logo />
        <Intro />
        <Trajetoria />
        <ComoAjuda />
        <ComoAcontece />
        <oQueEsperar />
        <Contato />
        <Mapa />
      </MobileProvider>
    </React.Fragment>
  );
}

export default App;
