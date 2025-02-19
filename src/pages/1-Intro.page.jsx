import React, { useRef, useState, useEffect, useContext } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  Title,
  ContentContainer,
} from "../style/PageContainers";
import { MobileContext } from "../context/mobileContext";

function Intro() {
  const text = useRef();
  const isMobile = useContext(MobileContext);

  return (
    <IntroSection>
      <ContentContainer>
        <Title>Apresentação</Title>
        <SectionText>
          <p>
            A busca por renovação, a mudança de hábitos antigos, iniciar uma
            nova fase ou criar um estilo de vida diferente… iniciativas sofrem
            com a resistência de nossos próprios esforços antes mesmo de
            começar.
          </p>

          <p>
            É frequente esquecermos de dar continuidade para ideias boas que
            temos ou dar prioridade à felicidade que almejamos. A mudança
            interior e alcançar uma versão melhorada de si, quando chegam,
            recompensam apenas esforço duradouro e consistente consigo próprio.{" "}
          </p>

          <p>
            Como terapeuta, sou testemunha de seu compromisso pessoal com a
            melhora. Promovo a aproximação de suas metas e assinalo os passos
            positivos de seu rumo. Objetivos valorosos muitas vezes requerem uma
            estrada cansativa, e quando acompanhados registramos progresso de
            maneira mais eficaz.
          </p>

          <p>
            Em momentos de crise, surgem sentimentos de confusão, sofrimento e
            angústia. Ao procurar conhecidos em momentos assim, você pode ter
            sido lembrado de seu próprio valor e se sentido acolhido ao expor
            esses sentimentos, isto conduz ao alívio e à redução de inseguranças
            e dúvidas.
          </p>

          <p>
            Alinhar-se com um terapeuta tem um efeito similar, pondo de lado
            hesitações e receios, e diferenciando mera especulação daquilo que
            concretamente nos diz respeito. Antecipe a consulta a um
            profissional para evitar complicações e dar vazão a seus planos.
          </p>
        </SectionText>
      </ContentContainer>
    </IntroSection>
  );
}

const IntroSection = styled(Section)`
  background: radial-gradient(circle at 100%, #ebb9a7, #acbbd2);
  margin-top: 24px;
  /* mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); */

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px; /* Adjust as needed */
    height: 200px;
    background-image: url("hat.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: translate(80%, 20%) rotate(30deg) scale(250%); /* Rotate by 45 degrees */
    opacity: 0.3;
    z-index: -1;
    overflow: hidden;
  }
`;

export default Intro;
