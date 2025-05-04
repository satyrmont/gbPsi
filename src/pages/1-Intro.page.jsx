import React, { useRef, useState, useEffect, useContext } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  Title,
  ContentContainer,
} from "../style/PageContainers";
import { MobileContext } from "../context/mobileContext";

import GBCarousel from "../components/Carousel.component";
import { WhatsappIcon } from "../components/WhatsApp.component";

function Intro() {
  const text = useRef();
  const isMobile = useContext(MobileContext);

  return (
    <IntroSection>
      <ContentContainer_Intro>
        <Title>Apresentação</Title>
        <IntroText>
          <IntroText_Wrapper>
            <p>
              Desconhecer o trabalho do psicólogo leva muitos a se conformarem
              com a aflição em silêncio e sustentar uma fachada de positividade
              que aprendemos imitando outros. Mesmo que não for o seu caso, é
              bom lembrarmos que:
            </p>
            <ul>
              <li>
                <ListItem>
                  Construir o enfrentamento não é tarefa solitária.
                </ListItem>
              </li>
              <li>
                <ListItem>
                  Guardar pensamentos para si não é prova de saúde mental.
                </ListItem>
              </li>
              <li>
                <ListItem>
                  Obter aconselhamento não é sinal de incapacidade.
                </ListItem>
              </li>
            </ul>
            <br />
            <p>
              Acredito na continuidade de boas ideias e pôr em prática planos
              empoeirados em meio à pressão diária. Dar maior importância ao seu
              bem-estar poderia ser o seu caso?
            </p>
            <p>
              Se você está movido para concretizar uma iniciativa ou determinar
              causas para a felicidade, testemunharei seu comprometimento e
              faremos diferença em sua resolução.
            </p>
            <p>
              Desabafar, pedir opinião profissional e buscar conhecimento é o
              mais esperado ao sentirmos alguma dor. Por que com o sofrimento e
              a dúvida interior seria diferente?{" "}
            </p>

            <p>
              Em momentos de hesitação ou quando é necessária uma mudança de
              curso, já notou a diferença em contar com alguém de confiança?
            </p>

            {/* <p>
              Quando é necessária uma mudança de curso ou em momentos de
              hesitação, já percebeu a diferença em contar com alguém de
              confiança?
            </p> */}
            <p>
              Espero traduzir seu interesse em um ato de motivação, otimismo e
              amor-próprio. Enxergue com clareza, sinta-se confiante e
              desencadeie potencial represado.
            </p>
          </IntroText_Wrapper>
        </IntroText>
      </ContentContainer_Intro>
      <GBCarousel />
    </IntroSection>
  );
}

const IntroSection = styled(Section)`
  background-color: white;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`;

const ContentContainer_Intro = styled(ContentContainer)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const IntroText_Wrapper = styled.div`
  p {
    break-inside: avoid;
  }

  @media (min-width: 768px) {
    column-count: 2;
  }
`;

const IntroText = styled(SectionText)`
  display: block;
  word-wrap: break-word;
  width: 100%;

  h2 {
    font-weight: 300;
    font-size: calc(var(--title-font-size) * 0.5);
    color: var(--color_G1);
    font-style: italic;
  }

  li {
    display: flex;
    flex-direction: row;
  }
  li::before {
    content: "•";
    margin-right: 4px;
    margin-left: 4px;
    flex-direction: row;
  }
`;

const ListItem = styled.div``;

const StyledIcon = styled.svg`
  fill: var(--color11);
  margin-right: 5px;

  /* background-color: green; */
`;

export default Intro;
