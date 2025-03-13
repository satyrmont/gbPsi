import React from "react";
import Nav from "./components/Nav.component.jsx";

import Logo from "./pages/0-Logo.page.jsx";
import Intro from "./pages/1-Intro.page.jsx";
import Experiencia from "./pages/2-Experiencia.page.jsx";
import ComoFunciona from "./pages/3-ComoFunciona.page.jsx";
import QueEsperar from "./pages/4-QueEsperar.page.jsx";
import PerguntasFrequentes from "./pages/5-PerguntasFrequentes.page.jsx";
import Contato from "./pages/6-Contato.page.jsx";

import { MobileProvider } from "./context/mobileContext.jsx";

function App() {
  return (
    <React.Fragment>
      <MobileProvider>
        <Nav />
        <Logo />
        <Intro />
        <Experiencia />
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
