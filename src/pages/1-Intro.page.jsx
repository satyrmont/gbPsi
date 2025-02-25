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

function Intro() {
  const text = useRef();
  const isMobile = useContext(MobileContext);

  return (
    <IntroSection>
      <ContentContainer_Intro>
        <Title>Apresentação</Title>
        <IntroText>
          <h2>
            Compartilhe sua história, revele-se autor de páginas prósperas.
          </h2>
          <br />
          <IntroText_Wrapper>
            <p>
              Desconhecer o trabalho do psicólogo leva muitos a se conformarem
              com a aflição em silêncio e sustentar uma fachada de positividade
              que aprendemos imitando outros:
            </p>
            <ul>
              <li>Construir o enfrentamento não é tarefa solitária.</li>
              <li>Guardar pensamentos para si não é prova de saúde mental.</li>
              <li>Obter aconselhamento não é sinal de incapacidade.</li>
            </ul>
            <br />
            <p>
              Acredito na continuidade de boas ideias e pôr em prática planos
              empoeirados em meio à pressão diária. Dar importância ao bem-estar
              poderia ser o seu caso?
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
              Quando é necessária uma mudança de curso ou em momentos de
              hesitação, já percebeu a diferença em contar com alguém de
              confiança?
            </p>
            <p>
              Espero traduzir seu interesse em um ato de motivação, otimismo e
              amor-próprio. Enxergue com clareza, sinta-se confiante e
              desencadeie seu potencial.
            </p>
            <Prossiga>
              <p>
                Prossiga se tiver mais interesse em meu trabalho ou algum dos
                seguintes tópicos:
              </p>
              <ul>
                <li>Saúde Mental</li>
                <li>Auto-cuidado</li>
                <li>Organizar queixas e demandas</li>
                <li>Auto-conhecimento</li>
                <li>Criar estratégias conscientes</li>
              </ul>
            </Prossiga>
          </IntroText_Wrapper>
        </IntroText>
      </ContentContainer_Intro>

      <ContentContainer_Experiencia>
        <ContentWrapper_Experiencia>
          <PortraitSection>
            <ContainerPortraitAndLinks>
              <PortraitContainer>
                <Portrait src="portrait01.jpeg" />
              </PortraitContainer>
              <Links>
                <div>
                  <u>Currículo de pesquisador</u>
                </div>
                {/* <a href="http://lattes.cnpq.br/7444613524162568">
              <div>
                <Icon_ExteriorLink />
                lattes.cnpq.br
              </div>
            </a> */}
                <u>Publicações:</u>
                <br />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {/* <a href="https://pubmed.ncbi.nlm.nih.gov/30826356/">
                <Icon_ExteriorArticle />
              </a>
              <a href="https://pubmed.ncbi.nlm.nih.gov/38215610/">
                <Icon_ExteriorArticle />
              </a> */}
                </div>
              </Links>
            </ContainerPortraitAndLinks>
          </PortraitSection>
          <SectionText_Experiencia>
            <Title_Experiencia>Experiência</Title_Experiencia>
            <p>Me chamo Guido Bittencourt, me conheça:</p>

            <p>
              Psicólogo pela Universidade de São Paulo (USP) e especialista em
              terapia comportamental e cognitiva pelo Instituto de Psiquiatria
              (IPq-FMUSP). Adquiri experiência em atendimento no Hospital das
              Clínicas, maior hospital da América Latina.
            </p>
            <p>
              Constatei que estava na profissão certa ao me deparar no jornal
              sobre médicos que “prescrevem” livros como forma de melhorar a
              saúde e lidar com as emoções: “‘A montanha mágica’ (Thomas Mann)
              para doenças do pulmão e ‘Anna Karenina’ (Leon Tolstói) contra
              dores de dente”, dizia a manchete.
            </p>

            <p>
              Narrar a própria história e encontrar correspondência com arte são
              capacidades humanas fundamentais, nos fazem sentir acompanhados e
              encontrar saídas para a existência.
            </p>

            <p>
              Concluí o mestrado pela USP na área de neurociências. Representei
              o Brasil em publicações científicas internacionais e no Congresso
              das Federações Europeias de Neurociência (FENS 2018). Residi como
              pesquisador visitante no Charité, maior hospital da Alemanha.
            </p>
          </SectionText_Experiencia>
        </ContentWrapper_Experiencia>
      </ContentContainer_Experiencia>
    </IntroSection>
  );
}

const IntroSection = styled(Section)`
  background-color: var(--color_D3);

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
  width: 70%;
  margin-bottom: 10px;

  /* background-color: #ffe4c43a; */
`;

const IntroText_Wrapper = styled.div`
  column-count: 2;

  p {
    break-inside: avoid;
  }

  /* background-color: #c9c4ff94; */
`;

const IntroText = styled(SectionText)`
  display: block;
  word-wrap: break-word;
  width: 100%;

  h2 {
    font-weight: 300;
    font-size: calc(var(--title-font-size) * 0.32);
    color: var(--color_G1);
    font-style: italic;
  }
  // Change from first-letter to first word
  p::first-letter {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--color_G1);
  }
  li::before {
    content: "•";
    margin-right: 4px;
  }
`;

const Prossiga = styled.div`
  column-count: 2;
`;

const ContentContainer_Experiencia = styled(ContentContainer)`
  background-color: var(--color_D1);
  box-sizing: border-box;
  padding: 10px 0px 10px 0px;
  width: 100%;
`;

const ContentWrapper_Experiencia = styled.div`
  display: flex;
  flex-direction: row;
  text-align: start;
  justify-content: space-between;
  position: relative;

  width: var(--content-width);
  /* background-color: #f848d462; */
`;
const SectionText_Experiencia = styled(SectionText)`
  color: white;
  box-sizing: border-box;
  column-count: 2;

  overflow: hidden;
  /* margin-left: 20px; */

  /* background-color: #ffe4c463; */
  p {
    break-inside: avoid;
  }
`;

const Title_Experiencia = styled(Title)`
  color: white;
`;
const PortraitSection = styled.div`
  color: #000000a9;

  background-color: var(--color_0);

  /* margin-top: 10px; */
  /* margin-bottom: 10px; */
  margin: 10px;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 1%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: clamp(18px, 2vw, 20px);

  filter: drop-shadow(10px 10px 20px #00000031);
`;
const ContainerPortraitAndLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Links = styled.div`
  font-size: 1rem;
  svg {
    /* width: 100px;
    height: 100px; */
    fill: blue;
  }
`;
const About = styled.div`
  font-size: 0.8rem;
  max-width: 16dvw;
  padding: 12px;
`;

const PortraitContainer = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
`;

const Portrait = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

const StyledIcon = styled.svg`
  fill: var(--color11);
  margin-right: 5px;
  width: ${({ size }) => size || "24px"};
  height: ${({ size }) => size || "24px"};
  &:hover {
    fill: var(--color11);
  }
`;

const Icon_ExteriorLink = () => (
  <StyledIcon
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="var(--color11)"
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
