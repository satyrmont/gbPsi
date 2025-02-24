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
      <ContentContainer_Metodo>
        <Title_Metodo>Terapia cognitivo comportamental</Title_Metodo>
        <SectionText_Metodo>
          <p>
            Método científico e escolha prioritária para promoção de saúde
            mental: prestígio adquirido ao ser adaptável para diferentes
            vivências e necessidades do público, e comunicar-se cientificamente
            com a área da saúde por meio de resultados concretos.
          </p>

          <p>
            Padrão-ouro, alternativo ou conjunto à medicação psiquiátrica:
            tratamento consagrado para ansiedade, depressão, transtornos
            psiquiátricos e de personalidade, conflitos pessoais.
          </p>

          <p>
            Saúde e bem-estar transmitidos pelo corpo, emoções e pensamentos:
            apoiada em tradição filosófica milenar e décadas de observação e
            pesquisa científica de ponta, a combinação de técnicas da Psicologia
            comportamental e cognitiva em consultório é o referencial teórico
            preferencial há mais de 40 anos.{" "}
          </p>

          <p>
            Revigore o espírito por enfrentamento racional e pensamento
            consciente: recursos e ferramentas compartilhados com transparência
            de objetivos convidam o paciente a aprender o tratamento e
            participar, e ganhando independência, sentir que e transformou-se em
            terapeuta de si próprio.
          </p>
        </SectionText_Metodo>
      </ContentContainer_Metodo>
    </Section_ComoFunciona>
  );
}

const Section_ComoFunciona = styled(Section)`
  color: white;
  background-color: var(--color15);

  display: flex;
  flex-direction: column;
`;
const ContentContainer_ComoFunciona = styled(ContentContainer)`
  width: 50dvw;
`;

const Title_ComoFunciona = styled(Title)`
  color: white;
`;

const ContentContainer_Metodo = styled(ContentContainer)`
  background-color: var(--color14);
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;
const SectionText_Metodo = styled(SectionText)`
  font-size: calc(var(--text-font-size) * 0.8);

  max-width: 50dvw;

  display: block;
  column-count: 2;
  p {
    break-inside: avoid;
  }

  background-color: #62451a;
`;

const Title_Metodo = styled(Title)`
  color: white;
  font-size: calc(var(--title-font-size) * 0.5);
`;

export default ComoFunciona;
