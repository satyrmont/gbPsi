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

            <p>
              Quando é necessária uma mudança de curso ou em momentos de
              hesitação, já percebeu a diferença em contar com alguém de
              confiança?
            </p>
            <p>
              Espero traduzir seu interesse em um ato de motivação, otimismo e
              amor-próprio. Enxergue com clareza, sinta-se confiante e
              desencadeie potencial represado.
            </p>
            <Prossiga>
              <p>
                Prossiga se tiver mais interesse em meu trabalho ou algum dos
                seguintes tópicos:
              </p>
              <ul>
                <li>
                  <ListItem>Saúde Mental</ListItem>
                </li>
                <li>
                  <ListItem>Auto-cuidado</ListItem>
                </li>
                <li>
                  <ListItem>Organizar queixas e demandas</ListItem>
                </li>
                <li>
                  <ListItem>Auto-conhecimento</ListItem>
                </li>
                <li>
                  <ListItem>Criar estratégias conscientes</ListItem>
                </li>
              </ul>
            </Prossiga>
          </IntroText_Wrapper>
        </IntroText>
        <a
          target="_blank"
          href="https://wa.me/5511943580695"
          class="whatsapp-button"
        >
          <WhatsappIcon />
          <i class="fab fa-whatsapp"></i>
        </a>
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

  background-color: aliceblue;

  .whatsapp-button {
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 99;
    background-color: #25d366;
    border-radius: 50px;
    color: #ffffff;
    text-decoration: none;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 0px 25px -6px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 25px -6px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 25px -6px rgba(0, 0, 0, 1);
    animation: effect 5s infinite ease-in;
  }

  /* background-color: #ffe4c43a; */
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
  /* p::first-letter {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--color_G1);
  } */

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

const Prossiga = styled.div`
  display: flex;
  flex-direction: row;
  column-count: 2;

  p {
    width: 60%;
  }
`;

const SectionWrapper_Experiencia = styled.div`
  width: 100%;
  background-color: var(--color_0);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const ContentContainer_Experiencia = styled(ContentContainer)`
  box-sizing: border-box;
  height: fit-content;
`;

const ContentWrapper_Experiencia = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: space-between;
  margin-left: var(--margin-top-bottom);
  height: 100%;
`;

const ContentWrapper_ExperienciaAndPortrait = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SectionText_Experiencia = styled(SectionText)`
  p {
    break-inside: avoid;
  }
`;

const Title_Experiencia = styled(Title)``;

const PortraitSection = styled.div`
  /* color: #000000a9; */
  height: fit-content;
  /* background-color: var(--color_1); */

  box-sizing: border-box;
  padding: 10px;
  border-radius: 1%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* font-size: clamp(18px, 2vw, 20px); */

  /* filter: drop-shadow(10px 10px 20px #00000031); */
`;

const ContainerPortraitAndLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Links = styled.div`
  font-size: 1rem;
  min-height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LinkButton = styled.button`
  font: var(--title-font);
  font-weight: 400;
  text-decoration: none;
  border-radius: 5px;
  border: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 6px;

  &:hover {
    cursor: pointer;
    background-color: var(--color_1);
  }

  h2 {
    text-align: start;
  }
`;

const PortraitContainer = styled.div`
  position: relative;
  height: 15rem;
  width: 15rem;
  overflow: hidden;
  border-radius: 50%;
  display: flex;

  margin: 10px;
  filter: drop-shadow(10px 10px 20px #00000031);
`;

const Portrait = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

const Publicacoes = styled.div`
  display: inline flex;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    & {
      gap: 20px;
    }
  }
`;

const StyledIcon = styled.svg`
  fill: var(--color11);
  margin-right: 5px;

  /* background-color: green; */
`;

const Icon_ExteriorLink = () => (
  <StyledIcon
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="black"
  >
    <path
      fill="none"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M11 4H4v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M9 15L20 4m-5 0h5v5"
    />
  </StyledIcon>
);
const Icon_ExteriorArticle = () => (
  <StyledIcon xmlns="http://www.w3.org/2000/svg">
    <path d="M10 17h4v-2h-4zm0-4h7v-2h-7zM7 9h10V7H7zm-.375 13q-1.975 0-3.363-1.388T1.875 17.25q0-1.425.738-2.55T4.55 13H2v-2h6v6H6v-2.425q-.925.2-1.525.95t-.6 1.725q0 1.15.812 1.95t1.938.8zM10 21v-2h9V5H5v4H3V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z" />
  </StyledIcon>
);

export default Intro;
