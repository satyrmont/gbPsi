import React, { useContext, useRef } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  Title,
  ContentContainer,
} from "../style/PageContainers";
import { MobileContext } from "../context/mobileContext";

function Metodo() {
  const isMobile = useContext(MobileContext);

  return (
    <Section_Metodo>
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
    </Section_Metodo>
  );
}

const Section_Metodo = styled(Section)`
  background-color: #a8d9eb;
`;
const ContentContainer_Metodo = styled(ContentContainer)`
  width: 50dvw;
`;
const SectionText_Metodo = styled(SectionText)``;
const Title_Metodo = styled(Title)``;

export default Metodo;
