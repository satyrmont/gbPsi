import React, { useContext, useRef } from "react";
import {
  Section,
  SectionText,
  Title,
  ContentContainer,
} from "../style/PageContainers";
import { styled } from "styled-components";
import { MobileContext } from "../context/mobileContext";

function Trajetoria() {
  const main = useRef();
  const title = useRef();

  return (
    <Section_SobreMim>
      <ContentContainer>
        <Title>Sobre Mim</Title>
        <TrajetoriaText>
          <Left>
            <p>
              Me chamo Guido, psicólogo pela Universidade de São Paulo (USP) e
              especialista em terapia comportamental e cognitiva pelo Instituto
              de Psiquiatria (IPq-FMUSP). Desenvolvi experiência em atendimento
              e pesquisa no Hospital das Clínicas, maior hospital da América
              Latina.
            </p>
            <br />
            <p>
              Concluí o mestrado pela USP na área de neurociências, com passagem
              pelo Charité, maior hospital da Alemanha. Representei o Brasil em
              publicações científicas e no Congresso das Federações Europeias de
              Neurociência (FENS 2018).
            </p>
          </Left>
          <Right>
            <img
              src="portrait01.jpeg"
              style={{ width: "200px", height: "auto" }}
            />
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
            https://pubmed.ncbi.nlm.nih.gov/30826356/
            https://pubmed.ncbi.nlm.nih.gov/38215610/
          </Right>
        </TrajetoriaText>
      </ContentContainer>
    </Section_SobreMim>
  );
}

const Section_SobreMim = styled(Section)`
  margin-top: 18px;
  background-color: #ebb9a7;
`;

const StyledIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: currentColor;
  margin-right: 5px;
  /* You can add additional styles like hover effects, animations, etc. */
  &:hover {
    fill: #3498db; /* Changes color on hover */
  }
`;

const Icon_ExteriorLink = () => (
  <StyledIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path d="M26 28H6a2.003 2.003 0 0 1-2-2V6a2.003 2.003 0 0 1 2-2h10v2H6v20h20V16h2v10a2.003 2.003 0 0 1-2 2" />
    <path d="M20 2v2h6.586L18 12.586L19.414 14L28 5.414V12h2V2z" />
  </StyledIcon>
);

const TrajetoriaText = styled(SectionText)`
  width: 80dvw;
  display: flex;
  flex-direction: row;
  align-items: start;
`;

const Left = styled.div`
  width: 40dvw;
  margin-right: 5dvw;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: start;
`;
const Right = styled.div`
  /* min-width: 25dvw; */
  width: 30dvw;
  display: flex;
  flex-direction: column;
  justify-content: end;
  /* align-items: end; */
  a {
    /* background-color: blanchedalmond; */
    /* display: flex; */
    /* flex-direction: row; */
    /* align-items: end; */
  }
`;
export default Trajetoria;
