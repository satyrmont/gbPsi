import React from "react";
import Nav from "./components/Nav.component.jsx";

import Logo from "./pages/0-Logo.page.jsx";
import Intro from "./pages/1-Intro.page.jsx";
import ComoFunciona from "./pages/2-ComoFunciona.page.jsx";
import QueEsperar from "./pages/3-QueEsperar.page.jsx";
import PerguntasFrequentes from "./pages/4-PerguntasFrequentes.page.jsx";
import Contato from "./pages/5-Contato.page.jsx";
import Mapa from "./pages/8-Mapa.page.jsx";

import { MobileProvider } from "./context/mobileContext.jsx";

function App() {
  return (
    <React.Fragment>
      <MobileProvider>
        <Nav />
        <Logo />
        <Intro />
        <ComoFunciona />
        <QueEsperar />
        <PerguntasFrequentes />
        <Contato />
        {/* <Mapa /> */}
      </MobileProvider>
    </React.Fragment>
  );
}

export default App;
