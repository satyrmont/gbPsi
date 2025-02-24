import React, { useContext } from "react";

import { MobileContext } from "../context/mobileContext.jsx";

import { styled } from "styled-components";

import {
  Section,
  SectionText,
  Title,
  ContentContainer,
} from "../style/PageContainers.jsx";

function ComoFunciona() {
  const isMobile = useContext(MobileContext);
  return (
    <Section_ComoFunciona>
      <ContentContainer_ComoFunciona>
        <Title_ComoFunciona>Como funciona?</Title_ComoFunciona>
        <SectionText>
          <p>
            Convido você a participar de um vínculo cooperativo envolvendo
            compreensão, confiança e confidencialidade. Elevamos a capacidade de
            canalizar emoções, estruturar o pensamento e promover hábitos de
            saúde e bem-estar.
          </p>
          <p>
            Uma perspectiva mais encorajadora cria o ambiente para atitudes
            saudáveis. Nos livramos de pensamentos contraproducentes visando
            areestruturação cognitiva.
          </p>
          <p>
            Adotando atitude construtiva e tolerante consigo mesmo, somos
            surpreendidos por uma leitura de realidade mais positiva, possível
            de alcançar desejos e guiar nosso destino.
          </p>

          <p>
            O estilo de vida que surge, alinhado a valores pessoais, está na
            origem da sensação de pertencimeto e satisfação que perseguimos e
            alcançamos juntos.
          </p>
        </SectionText>
      </ContentContainer_ComoFunciona>
    </Section_ComoFunciona>
  );
}

const Section_ComoFunciona = styled(Section)`
  background-color: #3b73b8;
  color: white;
`;
const ContentContainer_ComoFunciona = styled(ContentContainer)`
  width: 50dvw;
`;

const Title_ComoFunciona = styled(Title)`
  color: white;
`;
export default ComoFunciona;
