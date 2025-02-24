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
import Trajetoria from "./2-SobreMim.page";

function Intro() {
  const text = useRef();
  const isMobile = useContext(MobileContext);

  return (
    <IntroSection>
      <ContentContainer_Intro>
        <Title>
          <strong>Apresentação</strong>
        </Title>
        <IntroText>
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
        </IntroText>
      </ContentContainer_Intro>
      {/* <CarouselContainer>
        <GBCarousel />
      </CarouselContainer> */}

      <ContentContainer_SobreMim>
        <Historico>
          {/* <Title style={{ color: "white" }}>Sobre Mim</Title> */}
          <Title>Sobre Mim</Title>
          <TrajetoriaText>
            <p>Me chamo Guido, quero que você me conheça:</p>
            <p>
              psicólogo pela Universidade de São Paulo (USP) e especialista em
              terapia comportamental e cognitiva pelo Instituto de Psiquiatria
              (IPq-FMUSP). Adquiri experiência em atendimento e no Hospital das
              Clínicas, maior hospital da América Latina.
            </p>
            <br />
            <p>
              Concluí o mestrado pela USP na área de neurociências, com passagem
              pelo Charité, maior hospital da Alemanha. Representei o Brasil em
              publicações científicas e no Congresso das Federações Europeias de
              Neurociência (FENS 2018).
            </p>
          </TrajetoriaText>
        </Historico>
      </ContentContainer_SobreMim>
      <PortraitSection>
        <ContainerPortraitAndLinks>
          <PortraitContainer>
            <Portrait src="portrait01.jpeg" />
          </PortraitContainer>
          <Links>
            <div>
              <u>Currículo de pesquisador</u>
            </div>
            <a href="http://lattes.cnpq.br/7444613524162568">
              <div>
                <Icon_ExteriorLink />
                lattes.cnpq.br
              </div>
            </a>
            <u>Publicações:</u>
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <a href="https://pubmed.ncbi.nlm.nih.gov/30826356/">
                <Icon_ExteriorArticle />
              </a>
              <a href="https://pubmed.ncbi.nlm.nih.gov/38215610/">
                <Icon_ExteriorArticle />
              </a>
            </div>
          </Links>
        </ContainerPortraitAndLinks>
        <About>
          <p>
            Gosto de ler e estudar. Durante a Pandemia (2020 - 2023) criei o
            hábito de ler as notícias em alemão para aprender este idioma
            enquanto me atualizava. Foi chamativo constatar certa
            “personalidade” em cada jornal: o tipo de assunto e o tipo de
            opinião preferida refletem o conteúdo de escrita e um tipo de
            leitura preferida pela cultura daquele idioma: de país para país
            muda esta forma de interesse.
          </p>
          <br />
          <p>
            Me Interessou em particular leituras sobre o sentimento humano do
            amor, e sobre o uso de biblioterapia na medicina (leitura de livros
            durante o tratamento de uma doença) como meio de diminuir o
            sofrimento e promover a cura “de dentro para fora”: “‘A Montanha
            Mágica’ para doenças do pulmão e ‘Anna Karenina’ para dores de
            dente”, chamava a notícia. Este tema me fascina explorar e
            incorporar na clínica.
          </p>
        </About>
      </PortraitSection>
    </IntroSection>
  );
}
// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

const IntroSection = styled(Section)`
  background-color: var(--color01);

  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0px;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 200px;
    right: 40%;
    width: 200px; /* Adjust as needed */
    height: 200px;
    background-image: url("hat.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: translate(20svw, 20svh) rotate(30deg) scale(250%); /* Rotate by 45 degrees */
    opacity: 0.8;
    /* z-index: -1; */
    overflow: hidden;
  }
`;

const ContentContainer_Intro = styled(ContentContainer)`
  padding: 10px;
`;

const CarouselContainer = styled.div`
  width: 80%;
`;

const IntroText = styled(SectionText)`
  width: 50dvw;
`;

const Section_SobreMim = styled(Section)`
  background-color: var(--color02);
  flex-direction: column;
  color: white;
`;

const ContentContainer_SobreMim = styled(ContentContainer)`
  background-color: var(--color03);
  padding: 10px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: bisque; */
`;
const TrajetoriaText = styled(SectionText)`
  max-width: 80dvw;
  display: flex;
  /* flex-direction: row; */
  align-items: start;
`;

const Historico = styled.div`
  width: 40dvw;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: start;
`;
const PortraitSection = styled.div`
  position: absolute;
  color: white;

  border-radius: 1%;
  background-color: var(--color02);
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: clamp(18px, 2vw, 20px);

  right: 20px;
  top: 150px;

  filter: drop-shadow(10px 10px 20px #00000047);
  a {
    /* display: flex; */
    /* flex-direction: row; */
    /* align-items: end; */
  }
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
  color: white;

  padding: 12px;
`;

const PortraitContainer = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Portrait = styled.img`
  display: block;
  margin: 0 auto;
  height: 200px;
  width: auto;
`;

const StyledIcon = styled.svg`
  fill: currentColor;
  margin-right: 5px;
  width: ${({ size }) => size || "24px"};
  height: ${({ size }) => size || "24px"};
  &:hover {
    fill: #144a6f;
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
      stroke="currentColor"
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
